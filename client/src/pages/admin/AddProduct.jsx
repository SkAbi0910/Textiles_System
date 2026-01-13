import React from 'react'

export default function AddProduct() {

    const [name,setName] = useState("");
    const [description , setDescription] = useState("");
    const [price,setPrice] = useState(10);
    const [ offerPrice , setOfferPrice] = useState("10");
    const [category , setCategory] = useState("Men");
    const [popular , setPopular] = useState(false);
    const [size,setSize] = useState([]);


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
               <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />

             </div>
             <div className="w-full">

               <h5>
                Product Description
               </h5>
               <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" />
               
             </div>
             <div>
                <div className='flex flex-col sm:flex-row gap-4'>
                     <div>
                        <div>
                            <h5>
                                Category
                            </h5>
                            <select onChange={(e)=>setCategory(e.target.value)}>
                                
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
                        <h5>
                            
                        </h5>
                     </div>
                </div>
             </div>
        </form>
    </div>
  )
}
