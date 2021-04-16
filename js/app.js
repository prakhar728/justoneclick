

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
    width: "140",
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
      width: "100",
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
      width: "190",
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
       fontSize:"5rem",
       ease:Power2.easeOut,
  },{
    fontSize: "3rem",
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

  const t4 = new timeline({paused:true,
    scrollTrigger:{
      scroller:".wholeWindow",
      trigger:".imgContainer",
      start:"top 40%",
      end:"40% 30%",
      toggleActions:"play none reverse none",
     
    }
  });

  t4.fromTo(".imgContainer",1,{
    autoAlpha:0,
  },{
    autoAlpha:1,

  })

 
