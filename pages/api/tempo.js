function tempo (request, response){
    const myAmbientConst = process.env.ACONST;
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;