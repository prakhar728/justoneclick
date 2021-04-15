

const t1 = gsap.timeline({paused:true});
t1.fromTo(
  "#logos1",
  1,
  {
    width: "0",
    opacity:0,
    ease: Power2.easeOut,
  },
  {
    width: "140",
    opacity: 1,
  },"+=1"
)
  .fromTo(
    "#logos2",
    1,
    {
      width: "0",
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      width: "100",
      opacity: 1,
    },"-=1"
  )
  .fromTo(
    "#logos3",
    1,
    {
      width: "0",
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      width: "190",
      opacity: 1,
    },
    "-=1"
  );
t1.play();

  // const t2 = gsap.timeline({paused:true});
  // t2.fromTo(".title",1,{
  //     fontSize:"5rem",
  //     ease:Power2.easeOut,
  // },{
  //   fontSize: "3rem",
  // })
  //   .fromTo(
  //     "#logos1",
  //     1,{
  //         width: '140',
  //     },
  //     {
  //       width: '95',
  //     },
  //     "-=1"
  //   )
  //   .fromTo(
  //     "#logos2",
  //     1,{
  //         width:'100'
  //     },
  //     {
  //       width: '60',
  //     },
  //     "-=1"
  //   )
  //   .fromTo(
  //     "#logos3",
  //     1,{
  //         width:'190'
  //     },
  //     {
  //       width: '108',
  //     },
  //     "-=1"
  //   );
    




  const t3 = gsap.timeline({paused:true});
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

 
