import React from 'react'
import img1 from '../../../assets/banner1.png'
function ViewProduct() {

  const ListOfProducts=[{
    p1:{
        name:"Course One",
        images:[img1,img1,img1,img1,],
        desc:""
    },
    p2:{
      name:"Course Two",
      images:[img1,img1,img1,img1,],
      desc:""
    }
  }
  ]
  return (
    <div className='container flex justify-center gap-10 items-center mx-auto bg-red-900'>
      <div>
      {
        ListOfProducts.map((value,index)=>{
          <h1 key={value}>{value.p1.name}</h1>
        })
      }


      </div>
        <div></div>
        <div>ssss</div>
    </div>
  )
}

export default ViewProduct