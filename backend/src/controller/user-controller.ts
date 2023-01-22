import { Body, Controller, OnUndefined, Post } from 'routing-controllers';
import 'reflect-metadata';
import { loginModel } from '../model/info';
import { postHttp, parseSchoolWeekPage } from './logInDataParse';

@Controller()
export class UserController {
  @Post('/userLogIn')
  @OnUndefined(204)
  async postOne (@Body() logInFormData: loginModel) {
    /* const optionsToGetElement =
    {
      optionLessonNumber: '.dnevnik-lesson__number', // параметр для номера урока
      optionLessonName: '.js-rt_licey-dnevnik-subject', // параметр для названия урока
      optionLessonTime: '.dnevnik-lesson__time' // параметр для времени урока
    }; */

    // HTTP POST ЗАПРОС на сайт школы, для получения 'cookie'
    postHttp('https://edu.gounn.ru/ajaxauthorize', {
      'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryWG83INxnwv2VLIZR',
      username: logInFormData.login,
      password: logInFormData.password
    })
      .then(function (result) { // получение processedPage
        console.log(result);
        parseSchoolWeekPage('https://edu.gounn.ru/journal-app/week.-1', result) // url для СЛЕДУЮЩИЕЙ НЕДЕЛИ + полученные 'cookie'
      }).then(function (result){
        console.log(2)
        console.log(result)
      });
    // return recievedSchoolSchedual;
  }
}
