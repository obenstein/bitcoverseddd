import React, {useState,useEffect} from 'react'

function Modal() {

    const [show, setShow] = useState(false);
   
    useEffect(() => {
        setTimeout(()=>{
            setShow(true);
        },2000)    }, [])
    

  return (
    <>
        {
            show === true?
            <>
                <div className={`absolute h-[100vh] w-[100vw] flex justify-center items-center bg-gray-400/50 z-50 transition-all`} style={{transition: "right 0.8s ease"}}>
        <div className='bg-white p-10 max-w-xl rounded-3xl relative'>
            <span onClick={() => setShow(false)} className='absolute right-5 top-5'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
            <h3 className='font-semibold  leading-8 mb-5'>Be te first to know when new content is avaliable</h3>
            <h6 className='text-sm text-gray-500 mb-8 font-normal'>Sign up to recive tips and tricks on how to crate online designs that make people take action.</h6>
            <div className='flex gap-6'>
                <input type="text" className='flex-grow border-[2px] border-gray-300 p-3 rounded-xl  outline-none placeholder:text-base text-base font-semibold text-gray-500' placeholder='Your email address' />
                <button onClick={() => setShow(false)} className='px-10 py-2 rounded-xl bg-blue-600 text-white font-semibold'>Sign me up</button>
            </div>
        </div>
    </div>
            </>: <></>
        }
    </>
  )
}

export default Modal