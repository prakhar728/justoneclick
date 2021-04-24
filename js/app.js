
// Making the expanding Logo
if(screen.width<600){
  const t1 = gsap.timeline({paused:true
  });
  t1.fromTo(
    "#logos1",
    1,
    {
      width: "0",
      autoAlpha:0,
      ease: Power2.easeOut,
    },
    {
      width: "12vw",
      autoAlpha:1,
    },"+=1"
  )
    .fromTo(
      "#logos2",
      1,
      {
        width: "0",
        autoAlpha:0,
        ease: Power2.easeOut,
      },
      {
        width: "8.5vw",
        autoAlpha:1,
      },"-=1"
    )
    .fromTo(
      "#logos3",
      1,
      {
        width: "0",
        autoAlpha: 0,
        ease: Power2.easeOut,
      },
      {
        width: "15vw",
        autoAlpha: 1,
      },
      "-=1"
    );
  t1.play();
 
  const t3 = gsap.timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:".phrase",
      start:"top 20%",
      end:"bottom 10%",
      toggleActions:"play none reverse none",
      
    }
    });
    t3.fromTo(
      ".phrase",
      2,
      {
        opacity: 0,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
      }
    );



}
else{
const t1 = gsap.timeline({paused:true
});
t1.fromTo(
  "#logos1",
  1,
  {
    width: "0",
    autoAlpha:0,
    ease: Power2.easeOut,
  },
  {
    width: "9vw",
    autoAlpha:1,
  },"+=1"
)
  .fromTo(
    "#logos2",
    1,
    {
      width: "0",
      autoAlpha:0,
      ease: Power2.easeOut,
    },
    {
      width: "6.5vw",
      autoAlpha:1,
    },"-=1"
  )
  .fromTo(
    "#logos3",
    1,
    {
      width: "0",
      autoAlpha: 0,
      ease: Power2.easeOut,
    },
    {
      width: "12vw",
      autoAlpha: 1,
    },
    "-=1"
  );
t1.play();
const t2 = gsap.timeline({paused:true,
  scrollTrigger:{
    trigger:".title",
    scroller:".wholeWindow",
    start:"top 25%",
    end:"bottom 15%",
    toggleActions:"play complete reverse reverse",
  }});
t2.fromTo(".title",1,{
 fontSize:"5vw",
 ease:Power2.easeOut,
},{
fontSize: "3vw",
})
.to(
"#logos1",
1,{autoAlpha:1,
   width: '95',
},
"-=0.9"
)
.to(
"#logos2",
1,
{
  width: '60',
},
"-=0.9"
)
.to(
"#logos3",
0.7, {
  width: '106',
},
"-=1.15"
);

const t3 = gsap.timeline({paused:true,
  scrollTrigger:{
    scroller:".wholeWindow",
    trigger:".phrase",
    start:"top 40%",
    end:"40% 30%",
    toggleActions:"play none reverse none",
    
  }
  });
  t3.fromTo(
    ".phrase",
    2,
    {
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
    }
  );
  }
// Making it shrink with the scroll trigger
 



  

  const t4 = gsap.timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:"#img1",
      start:"top center",
      end:"bottom center",
      toggleActions:"play none reverse none",
     
    }
  });

  t4.fromTo("#img1",1,{
    opacity:0,
    x:-80,
    ease:Power2.easeOut,
  },{
    x:0,
    opacity:1
  });

  const t5 = gsap.timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:"#img2",
      start:"top center",
      end:"bottom center",
      toggleActions:"play none reverse none",
    
    }
  });
  t5.fromTo("#img2",1,{
    opacity:0,
    y:-80,
    ease:Power2.easeOut,
  },{y:0,
    opacity:1
  });
  const t6 = gsap.timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:"#img3",
      start:"top center",
      end:"bottom center",
      toggleActions:"play none reverse none",
    
    }
  });
  t6.fromTo("#img3",1,{
    opacity:0,
    y:80,
    ease:Power2.easeOut,
  },{
    y:0,
    opacity:1
  });
  const t7 = gsap.timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:"#img4",
      start:"top center",
      end:"10% center",
      toggleActions:"play none reverse none",
     
    }
  });
  t7.fromTo("#img4",1,{
    opacity:0,
    x:60,
    y:40,
    ease:Power2.easeOut,
  },{
    x:0,
    y:0,
    opacity:1
  });
  

 
