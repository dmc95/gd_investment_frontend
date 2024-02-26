const formatDate =(value)=>{
    const date = value
    const [annee, mois, jour] = date.split("-")
    const newDate = `${jour}-${mois}-${annee}`
    return newDate
    }
    export default formatDate