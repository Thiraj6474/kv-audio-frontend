import { createClient } from '@supabase/supabase-js' 

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphamd2aG9iZGZzbmNybGlmcmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMTY2OTQsImV4cCI6MjA5MzY5MjY5NH0.4YF1Dp_58CBUSmo6cI8-MfSe2bn_DW_b_yoTwT8pICQ"
const supabase_url = "https://zajgvhobdfsncrlifrlt.supabase.co"

const supabase = createClient(supabase_url,anon_key)

export default function mediaUpload(file){

    return new Promise((resolve,reject)=>{
        if (file==null){
            reject("No file selected")
        }
        
    const timestamp = new Date().getTime();
    const fileName = timestamp+file.name

    supabase.storage.from("images").upload(fileName,file ,{
        cacheControl: '3600',
        upsert:false,
        
    }).then(()=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl)
    }).catch((err)=>{
        reject("Error uploading file")
    })

    })

    
}