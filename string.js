

function setOne() {
    var myHeading = document.querySelector('h1');

    let sd = '123456789';
    let rr = "1 Задание";
    myHeading.textContent = rr + sd;

    document.writeln(sd[2], sd[4]);
    document.writeln(sd.slice(4, 7));
    document.writeln(sd.slice(-5, -2));
}
function setTwo() { 
    let text = 'AaBbCcDd'
    let len = text.length;
    let upper = '';
    let lower = '';

    while (len-- > 0) {
        if (len % 2 === 0) {
            upper += text[len];
        } else {
            lower += text[len];
        }
    }
    console.log(upper);
    console.log(lower);
}
function setTree() {
    let para = document.createElement('p');
    const cat = 'кот';
                
    

    for (let len = cat.length; len-- > 0;) {
        para.textContent += cat[len];
    }

    document.body.appendChild(para);
}

function setFour() {

    let cunt = '131231442145';
    var count = 0;
    let pa = document.createElement('h2');

    for (let i = cunt.length - 1; i >= 0; i--) {
        if (cunt[i] === '1') {
            pa.textContent += cunt[i];
            document.writeln(1);
            count++;
        }
    }
    document.body.appendChild(pa);
    let fog = document.createElement('h2');
    fog.textContent = count;
    document.body.appendChild(fog);
}

function setFive() {
    var string = "В Ереване";
    string = string.toLowerCase();
    var j = 0;
    let stringElement = document.createElement('p');
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === 'е') {
            j++;
        }
    }
    stringElement.textContent = j; 
    document.body.appendChild(stringElement);
}

function setSix() {
    let sd = '9876543210';
    let str = "Земля -2022";
    var len = sd.length
    while (len-- > 0) {
        if (str.includes(sd[len])) {
            document.write('Yes');
            break;
        }
        document.writeln(sd[len]);
    }
    
}

function setSeven() {
    let str = 'выхухоль';
    var sstr = [];
    var len = str.length; 
    while (len-- > 0) {
        if (!sstr.includes(str[len])) {
            sstr.unshift(str[len]);
        }
    }
    document.writeln(sstr);
}

function setEight() {
    let strTime = '03:25:57';
    let arTime = strTime.split(':');
    let hour = Number(arTime[0]);
    let min = Number(arTime[1]);
    let sec = Number(arTime[2]);

    let nSecond = (hour * 3600) + (min * 60) + sec;
    let text = 'До сробатывания таймера осталось ' + nSecond + '.сек'
    document.write(text);
}