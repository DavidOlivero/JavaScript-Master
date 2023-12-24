import { Injectable } from "@angular/core";
import { API } from "../configs/global";

@Injectable()
export class UploadServices {
    public url: string
    
    constructor() {
        this.url = API
    }

    public makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData
            const xhr = new XMLHttpRequest()

            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name)
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response))

                        console.log("Correcto")
                    } else {
                        reject(xhr.response)
                    }
                }
            }

            xhr.open('POST', url, true)
            xhr.send(formData)
        })
    }
}