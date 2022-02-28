const allSports = () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php'
    fetch(url)
        .then(res => res.json())
        .then(data => showAllSports(data.sports))
}
allSports();
const showAllSports = sports => {
    const sportsLilsi = document.getElementById('all-sports')
    sports.forEach(sport => {
        console.log(sport)
        const makesportsDiv = document.createElement('div')
        makesportsDiv.classList.add('col-md-4', 'some-style')
        makesportsDiv.innerHTML = `
            <div>
                <img src="${sport.strSportThumb}" alt="">
            </div>
            <h4> ${sport.strSport}</h4>
            <p> ${sport.strSportDescription.slice(0, 200)}</p>
            <div>
                <img src="" alt="">
            </div>
      
        `;
        sportsLilsi.appendChild(makesportsDiv)

    })
}
