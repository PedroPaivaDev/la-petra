import React from 'react';

const ScrollTop = () => {
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", function(){
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop < lastScrollTop ){
        console.log('O usuário está rolando para cima')
      } else {
        console.log('O usuário está rolando para baixo')
      }
      setLastScrollTop(currentScrollTop);
    }, false);
  })

  return (
    <div>ScrollTop</div>
  )
}

export default ScrollTop;