

let buildHistogram = (input) => {
    let histogram = {}

    for(let letter of input){
        letter in histogram ? histogram[letter] += 1 : histogram[letter] = 1
    }  
    return histogram
}

let canBuildNote = (mag, note) => {
    let boolean = false

    if (mag.length >= note.length){
        let magHistogram = buildHistogram(mag)
        let noteHistogram = buildHistogram(note)
        for(let letter in noteHistogram){
            if (magHistogram[letter]  >= noteHistogram[letter]){
                boolean = true
            }else{
                boolean = false 
                break
            }
        }
    }
    return boolean
}