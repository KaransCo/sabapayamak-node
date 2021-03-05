# Sabapaymak NodeJs Sdk for rest Api

## راهنما
صبا پیامک یک سیستم ارسال پیامک است که از طریق پنل یا وب سرویس میتوانید از آن استفاده کنید.

برای نصب پکیج دستور زیر را اجرا کنید

##### 
```
npm install sabapayamak
```



## نحوه استفاده در کد


```node
var Sabapayamak = require('sabapayamak');
var api = Sabapayamak.SabapayamakApi({
    host: 'YOUR_API_URL'
});
api.getToken('YOUR_USER_NAME', 'YOUR_PASSWORD', 'YOUR_NUMBER', 1,
    function(response, status) {
        console.log(response);
        console.log(status);
    });
   
```
