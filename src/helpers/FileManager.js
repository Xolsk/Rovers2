class FileManager {

    static readFileAsync(file) {

        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsText(file);
        })
    }

    
    static async  processFile(file) {
        
        try {
            let text = await FileManager.readFileAsync(file);
            let cleaningText=text.replace(/\s/g, "-");
            const orders=cleaningText.split("--");
            return orders;
        } catch (err) {
            console.log(err);
        }


    }
}

export default FileManager;