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

  submitHandler:

    function (thisForm) {

      const formData = new FormData(thisForm);

      thisForm.reset();
      
      for (const pair of formData.entries()) {
        console.log(JSON.stringify(pair[0]+ ' - ' + pair[1]));
      }
      return formData;
    },
});

