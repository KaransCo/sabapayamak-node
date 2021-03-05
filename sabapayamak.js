var https = require('https');

const TOKEN_URL = "/api/v1/user/authenticate";
const CREDIT_URL = "/api/v1/credit";
const CREDIT_DATE_URL = "/api/v1/credit";
const CREDIT_COUNT_URL = "/api/v1/credit";
const CREDIT_SNED_SMS_URL = "/api/v1/credit/send-sms";
const CREDIT_RECIVED_SMS_URL = "/api/v1/credit/recived";
const CREDIT_CHARGE_SMS_URL = "/api/v1/credit/charge";
const CREDIT_MONEY_BACK_SMS_URL = "/api/v1/credit/money-back";
const MESSAGE_DATE_URL = "/api/v1/messages";
const MESSAGE_GET_URL = "/api/v1/messages";
const MESSAGE_NUMBER_URL = "/api/v1/messages/number";
const MESSAGE_SEND_URL = "/api/v1/messages";
const MESSAGE_DELIVERY_URL = "/api/v1/deliveries";
const RECIVED_MESSAGE_DATE_URL = "/api/v1/recived-messages";
const RECIVED_MESSAGE_NUMBER_URL = "/api/v1/recived-messages";
const RECIVED_MESSAGE_NUMBER_UNREAD_URL = "/api/v1/recived-messages";
const RECIVED_MESSAGE_UNREAD_URL = "/api/v1/recived-messages/unread";
const RECIVED_MESSAGE_VNUMBER_URL = "/api/v1/recived-messages/virtaul-number";
const RECIVED_MESSAGE_VNUMBER_UNREAD_URL = "/api/v1/recived-messages/virtaul-number";


var SabapayamakApi = function (options) {
    this.options = {};
    this.options.host = options.host;
};





SabapayamakApi.prototype.post = function (fullPath, data, callback) {
    var postdata = JSON.parse(data);
    var post_options = {
        host: this.options.host,
        port: '443',
        path: fullPath,
        method: 'POST',
        headers: {
            'Content-Length': postdata.length,
            'Content-Type': 'application/json',
        }
    };
    var req = https.request(post_options, function (e) {
        e.setEncoding('utf8');
        var result = '';
        e.on('data', function (data) {
            result += data;
        });
        e.on('end', function () {
            try {
                if (callback) callback(
                    result
                );
            } catch (e) {
                console.log('Error Happend!', e);
                if (callback) {
                    callback([], 500, e.message)
                }
            }
        })
    });
    req.write(postdata, "utf8");
    req.on("error", function (e) {
        if (callback) callback(JSON.stringify({
            error: e.message
        }));
    });
    req.end();
};

SabapayamakApi.prototype.postWithToken = function (fullPath, data, token, callback) {
    var postdata = JSON.parse(data);
    var post_options = {
        host: this.options.host,
        port: '443',
        path: fullPath,
        method: 'POST',
        headers: {
            'Content-Length': postdata.length,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + token
        }
    };
    var req = https.request(post_options, function (e) {
        e.setEncoding('utf8');
        var result = '';
        e.on('data', function (data) {
            result += data;
        });
        e.on('end', function () {
            try {
                if (callback) callback(
                    result
                );
            } catch (e) {
                console.log('Error Happend!', e);
                if (callback) {
                    callback([], 500, e.message)
                }
            }
        })
    });
    req.write(postdata, "utf8");
    req.on("error", function (e) {
        if (callback) callback(JSON.stringify({
            error: e.message
        }));
    });
    req.end();
};

SabapayamakApi.prototype.get = function (fullPath, token, callback) {

    var post_options = {
        host: this.options.host,
        port: '443',
        path: fullPath,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  ' + token
        }
    };
    var req = https.request(post_options, function (e) {
        e.setEncoding('utf8');
        var result = '';
        e.on('data', function (data) {
            result += data;
        });
        e.on('end', function () {
            try {
                if (callback) callback(
                    result
                );
            } catch (e) {
                console.log('Error Happend!', e);
                if (callback) {
                    callback([], 500, e.message)
                }
            }
        })
    });
    req.write(postdata, "utf8");
    req.on("error", function (e) {
        if (callback) callback(JSON.stringify({
            error: e.message
        }));
    });
    req.end();
};

SabapayamakApi.prototype.getToken = function (username, password, virtualnumber, validday, callback) {
    var url = this.options.host + TOKEN_URL;
    let data = {
        "username": username,
        "password": password,
        "virtualnumber": virtualnumber,
        "validday": validday
    };
    this.post(url, data, callback);
};

SabapayamakApi.prototype.getCredit = function (token, callback) {
    var url = this.options.host + CREDIT_URL;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditByDate = function (startdate,enddate,token, callback) {
    var url = this.options.host + CREDIT_DATE_URL+'?StartDate='+startdate+'&EndDate'+enddate;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditByCount = function (count,token, callback) {
    var url = this.options.host + CREDIT_COUNT_URL+'/'+count;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditForSendSms = function (count,token, callback) {
    var url = this.options.host + CREDIT_SNED_SMS_URL+'/'+count;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditForRecivedSms = function (count,token, callback) {
    var url = this.options.host + CREDIT_RECIVED_SMS_URL+'/'+count;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditForCharge = function (count,token, callback) {
    var url = this.options.host + CREDIT_CHARGE_SMS_URL+'/'+count;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getCreditForMoneyBack = function (count,token, callback) {
    var url = this.options.host + CREDIT_MONEY_BACK_SMS_URL+'/'+count;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getMessagesByDate = function (startdate,enddate,token, callback) {
    var url = this.options.host + MESSAGE_DATE_URL+'?StartDate='+startdate+'&EndDate'+enddate;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getMessageById = function (id,token, callback) {
    var url = this.options.host + MESSAGE_GET_URL+'/'+id;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getMessageByNumber = function (number,token, callback) {
    var url = this.options.host + MESSAGE_NUMBER_URL+'/'+number;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.sendMessage = function (text,numbers,token, callback) {
    var url = this.options.host + MESSAGE_SEND_URL;
    var url = this.options.host + TOKEN_URL;
    let data = {
        "text": text,
        "numbers": numbers
    };
    this.postWithToken(url,data, token, callback);
};
SabapayamakApi.prototype.getDeliveriesById = function (id,token, callback) {
    var url = this.options.host + MESSAGE_DELIVERY_URL+'/'+id;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getRecivedMessageByDate = function (startdate,enddate,token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_DATE_URL+'?StartDate='+startdate+'&EndDate'+enddate;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getRecivedMessageByNumber = function (number,token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_NUMBER_URL+'/'+number;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getUnreadRecivedMessageByNumber = function (number,token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_NUMBER_UNREAD_URL+'/'+number+'/unread';
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getRecivedMessageByNumber = function (vnumber,token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_VNUMBER_URL+'/'+vnumber;
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getUnreadRecivedMessageByNumber = function (vnumber,token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_VNUMBER_UNREAD_URL+'/'+vnumber+'/unread';
    this.get(url, token, callback);
};
SabapayamakApi.prototype.getUnreadRecivedMessage = function (token, callback) {
    var url = this.options.host + RECIVED_MESSAGE_UNREAD_URL;
    this.get(url, token, callback);
};