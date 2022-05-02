function tempo (request, response){
    const myAmbientConst = process.env.ACONST;
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString(),
        aconst: myAmbientConst
    })
}

export default tempo;