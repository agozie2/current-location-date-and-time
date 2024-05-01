// setInterval(function () {
//          const date = new Date();
//          let year = date.getFullYear()
//          let hour = date.getHours();
//          let minute = date.getMinutes();
//          let second = date.getSeconds();
//          let numberofthemonth = date.getDate();
//          let day = date.getDay()
//          let days = ['Sun', 'mon', 'tue', 'wed', 'thrus', 'fri', 'sat'];
//          let months = ['jan']
//          let month = date.getMonth()
//          document.querySelector('.h').innerHTML = hour
//          document.querySelector('.minute').innerHTML = minute;
//          document.querySelector('.year').innerHTML = year
//          document.querySelector('.day').innerHTML = days[day] + ' ,'
//          document.querySelector('.second').innerHTML = second
// })



function time() {
         const date = new Date();
         let year = date.getFullYear()
         let hour = date.getHours();
         let minute = date.getMinutes();
         let second = date.getSeconds();
         let numberofthemonth = date.getDate();
         let day = date.getDay()
         let days = ['Sun', 'mon', 'tue', 'wed', 'thrus', 'fri', 'sat'];
         let months = ['jan']
         let month = date.getMonth()
         document.querySelector('.h').innerHTML = hour
         document.querySelector('.minute').innerHTML = minute;
         document.querySelector('.year').innerHTML = year
         document.querySelector('.day').innerHTML = days[day] + ' ,'
         document.querySelector('.second').innerHTML = second

         let s = null;
         if (hour >= 12) {
                  s = 'PM'
         } else {
                  s = 'AM'
         }

         document.querySelector('.session').innerHTML = s
}

// setInterval(function(){
//          time()
// })

setInterval(time)

// let h = 00;
// let s = '';








