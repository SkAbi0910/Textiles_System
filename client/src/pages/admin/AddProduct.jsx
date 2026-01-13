import React from 'react'
import upload_icon from '../../assets/upload_icons.png'

export default function AddProduct() {

    const [name,setName] = useState("");
    const [description , setDescription] = useState("");
    const [price,setPrice] = useState(10);
    const [ offerPrice , setOfferPrice] = useState("10");
    const [category , setCategory] = useState("Men");
    const [popular , setPopular] = useState(false);
    const [sizes,setSizes] = useState([]);


    const onSubmitHandler= async(event)=>{
        event.preventDefault();
    }
  return (
    <div>

        <form onSubmit={onSubmitHandler}>

             <div className="w-full">

               <h5>
                Product Name
               </h5>
               <input onChange={(e)=>setName(e.target.value)} value={name} type="text"
                />

             </div>
             <div className="w-full">

               <h5>
                Product Description
               </h5>
               <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" 
                
                placeholder='Write here...'
                className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl resize-none'
                />
               
             </div>
             <div>
                <div className='flex flex-col sm:flex-row gap-4'>
                     <div className='flex flex-row gap-4'>
                        <div>
                            <h5>
                                Category
                            </h5>
                            <select onChange={(e)=>setCategory(e.target.value)}
                              
                          className='max-w-20 px-3 py-2 text-gray-30 ring-1 ring-slate-900/S bg-white rounded'
                              >
                                
                                <option value="Men">

                                </option>
                                 <option value="Women">

                                </option>
                                 <option value="Kids">

                                </option>
                                
                                  <option value="Footwear">

                                </option>
                                  <option value="Winterwear">

                                </option>
                                  <option value="Sportwear">

                                </option>
                            </select>
                        </div>
                     </div>
                     <div>
                        <h5 className='h5'>
                            Producr Price
                        </h5>
                        <input onChange={(e) => setPrice(e.target.value)} value={price} type ="number" placeholder='10'
                        className='px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5'
                        
                        />
                     </div>
                     <div>
                        <h5 className='h5'>
                            Offer Price
                        </h5>
                        <input onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} type ="number" placeholder='10'
                        className='px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5'
                        
                        />
                     </div>
                </div>
             </div>


             <div>
              <h5 className='h5'>Product Sizes</h5>
              <div className=' flex gap-3 mt-2'>
           <div  onClick={()=>setSize(prev=>prev.includes("S") ? prev.filter(item => item !== "S") : [...prev , "S"])}>
            <span className={`${sizes. includes("S") ? "bg-tertiary text-white" : bg-white} text-gray-30 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer`}>
              S
            </span>
           </div>
            <div  onClick={()=>setSize(prev=>prev.includes("M") ? prev.filter(item => item !== "M") : [...prev , "M"])}>
            <span className={`${sizes. includes("S") ? "bg-tertiary text-white" : bg-white} text-gray-30 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer`}>
              M
            </span>
           </div>
            <div  onClick={()=>setSize(prev=>prev.includes("L") ? prev.filter(item => item !== "L") : [...prev , "L"])}>
            <span className={`${sizes. includes("S") ? "bg-tertiary text-white" : bg-white} text-gray-30 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer`}>
              L
            </span>
           </div>
            <div  onClick={()=>setSize(prev=>prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev , "XL"])}>
            <span className={`${sizes. includes("S") ? "bg-tertiary text-white" : bg-white} text-gray-30 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer`}>
              XL
            </span>
           </div>
           <div  onClick={()=>setSize(prev=>prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev , "XXL"])}>
            <span className={`${sizes. includes("S") ? "bg-tertiary text-white" : bg-white} text-gray-30 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer`}>
              XXL
            </span>
           </div>
              </div>
             </div>
             <div className='flex gap-2 pt-2'> 
                {
                  Array(4).fill('').map((_,index)=>{


                    <label key={index} htmlFor={`images${index}`}
                     className='rounded overflow-hidden'>

                      <input onChange={(e)=>{
                          
                          const updatedFiles = [...files]
                          updatedFiles[index] = e.target.files[0]
                          setFiles(updatedFiles)

                      }} 
                      type = "files" id ={`image${index}`}
                      hidden
                      
                      />

                      <img src = {files[index] ? URL.createObjectURL(files[index]) : upload_icon} alt="uploadArea" width={67} height={67} className='bg-white'/>
                     </label>

                  })
                }
             </div>
             <div className='flexStart gap-2 my-2'>

             </div>
        </form>
    </div>
  )
}
