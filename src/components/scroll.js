export const scroll = (target) =>{
    document.querySelector(target).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
