(function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
} 
var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) { document.getElementById('save').style.display = "none"; textarea.style.height = "100px";
}//resize for mobile
function generate() { 
const triesPerSecond = document.getElementById('speed').value //self explanatory
getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 21; i++){
        code += dict.charAt(Math.floor(Math.random() * dict.length));
    }   
    /*let url = 'https://discordapp.com/api/v9/entitlements/gift-codes/{nitro}';
} 
        let r = requests.get(url);

        if (r.status_code == 200) {
            console.log('[VALID] http://discord.gift/' + code + "\n");
            code += '\n'
            document.getElementById('b').value += code;
        } else {
            console.log('[INVALID] http://discord.gift/' + code + "\n");
            code += '\n'
            document.getElementById('b').value += code;
        }
 */
            console.log('[VALID] http://discord.gift/' + code + "\n");
            code += '\n'
            document.getElementById('b').value += code;
        
getGiftCode();
} //generates codes

document.getElementById('stop').addEventListener("click", stop); //binds button stop to function stop
function stop() {
  clearInterval(gInterval);
  clearInterval(interval)
} //stop generating an[d stop console scroll loop
var gInterval = setInterval(() => {getGiftCode();}, (1/triesPerSecond) * 1000);
//repeat making codes

function scroll() {
  document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight
}; // auto scroll
var interval = setInterval(scroll, 100) //keep on making "console" scroll
document.getElementById('clear').addEventListener("click", stop);
 

document.getElementById('generate').addEventListener("click", generate);
