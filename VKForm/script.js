// ----------------------------------------- VALIDATION AND SEND -----------------------------------------

new JustValidate('.form', {
  rules: {
    tower: {
      required: true,
    },
    floor: {
      required: true,
    },
    number: {
      required: true,
    },
    datetime: {
      required: true,
    },
  },
  colorWrong: '#FF5C00',
  messages: {
    tower: {
      required: 'Это поле обязательное для заполнения',
    },
    floor: {
      required: 'Это поле обязательное для заполнения',
    },
    number: {
      required: 'Это поле обязательное для заполнения',
    },
    datetime: {
      required: 'Это поле обязательное для заполнения',
    },
  },

  // submitHandler:
  
  //   function (thisForm) {

  //     return new FormData(thisForm);

  //     console.log(JSON.parse(thisForm));
  //   }

  // submitHandler: document.addEventListener('DOMContentLoaded', function () {
  //   const form = document.querySelector('.form');
  //   form.addEventListener('submit', formSend);

  //   async function formSend(e) {
  //     e.preventDefault();

  //     let formData = new FormData(form);

  //     let response = await fetch('index.html', {
  //       methid: 'POST',
  //       body: formData
  //     });
  //     if (response.ok) {
  //       let result = await response.json();
  //       console.log(JSON.parse(formData));
  //       form.reset();
  //     } else {
  //       alert("Ошибка!")
  //     }
  //   }
  // })
  
  // submitHandler: function(thisForm) {
  //   let formData = new FormData(thisForm);
  //   let xhr = new XMLHttpRequest();
    
    
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         console.log(JSON.parse(formData));
  //       }
  //     }
  //   }
  
  //   xhr.send(formData);
  
  //   thisForm.reset();
  // }
});

