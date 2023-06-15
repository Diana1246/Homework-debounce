function handleSlidersChange() {
 
    const sliderValue = document.querySelector('.slider__input').value;

 
    const box = document.getElementById('box');
    box.style.width = sliderValue + 'px';
    box.style.height = sliderValue + 'px';
  }
 
  const debouncedHandleSliderChange = _.debounce(handleSlidersChange, 100);
 
  document.querySelector('.slider__input').addEventListener('input', debouncedHandleSliderChange);


  const sliderInput = document.querySelector('.slider__input');
  const sliderImage = document.querySelector('.slider__image');

   
  function handleSliderChange() {
    
    const value = sliderInput.value;
    const imageSize = value * 3;  
    sliderImage.style.width = `${imageSize}px`;
  }

   
  function debounce(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }

  
  const debouncedSliderChange = _.debounce(handleSliderChange, 500);

   
  sliderInput.addEventListener('input', debouncedSliderChange);