import { createContext,useState } from "react";


const MusicContext = createContext()

 export const MusicProvider =({children})=>{

   const [music,setMusic] = useState([
    
   ])

     return <MusicContext.Provider>
        {children}
    </MusicContext.Provider>
}

export default MusicContext