let prevBtn = document.getElementById("backbtn")
let playBtn = document.getElementById("playbtn")
let nextBtn = document.getElementById("nextbtn")
let imageTag = document.getElementById("imagetag")
let nameTag = document.getElementById("nametag")
let slider = document.getElementById("slider")
let volumeSlider = document.getElementById("volumeslider")
let currentTime = document.getElementById("curr-time")
let totalTime = document.getElementById("total-time")
let playlistContainer = document.getElementById("playlist-container")


const info = [
    {
        displayName : "Awara Shaam hai",
        trackName : "track1",
        image :"https://i.ibb.co/8DTxkHV5/mqdefault.jpg"
    },
    {
        displayName : "Cute Songs",
        trackName : "track2",
        image : "https://i.ibb.co/sJvdXDcY/cute.jpg"
    },
    {
        displayName : "Duniya Songs",
        trackName : "track3",
        image : "https://i.ibb.co/08yjVHm/duniya.jpg"
    },
    {
        displayName : "Yara Songs",
        trackName : "track4",
        image : "https://i.ibb.co/xSZCTfSg/yara.jpg"
    },
    {
        displayName :"Ek din Aap",
        trackName : "track5",
        image : "https://i.ibb.co/JWmvgXD3/ekdin.jpg"
    },
    {
        displayName :"Nazra ke Teer",
        trackName : "track6",
        image : "https://i.ibb.co/gZQv3Nmh/nazra.jpg"
    },
    {
        displayName :"Liwasss Kaka songs",
        trackName : "track7",
        image : "https://i.ibb.co/XQWJz4s/libass.jpg"
    },
    {
        displayName : "Awara Shaam hai",
        trackName : "track1",
        image :"https://i.ibb.co/8DTxkHV5/mqdefault.jpg"
    },
    {
        displayName : "Cute Songs",
        trackName : "track2",
        image : "https://i.ibb.co/sJvdXDcY/cute.jpg"
    },
    {
        displayName : "Duniya Songs",
        trackName : "track3",
        image : "https://i.ibb.co/08yjVHm/duniya.jpg"
    },
    {
        displayName : "Yara Songs",
        trackName : "track4",
        image : "https://i.ibb.co/xSZCTfSg/yara.jpg"
    },
    {
        displayName :"Ek din Aap",
        trackName : "track5",
        image : "https://i.ibb.co/JWmvgXD3/ekdin.jpg"
    },
    {
        displayName :"Nazra ke Teer",
        trackName : "track6",
        image : "https://i.ibb.co/gZQv3Nmh/nazra.jpg"
    },
    {
        displayName :"Liwasss Kaka songs",
        trackName : "track7",
        image : "https://i.ibb.co/XQWJz4s/libass.jpg"
    }

    



]


let currentIndex = 0
let currentMusic = new Audio()
currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
currentMusic.volume =  0.5



playBtn.addEventListener("click", () => {
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
        imageTag.src = info[currentIndex].image
        nameTag.innerText = info[currentIndex].displayName
        currentMusic.play()
    }
    else
    {
        playBtn.classList.remove("fa-circle-pause")
        playBtn.classList.add("fa-circle-play")
        currentMusic.pause()
    }
})


nextBtn.addEventListener("click", () => {
    currentIndex++
    if(currentIndex == info.length)
    {
        currentIndex = 0
    }
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
    }
    currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
    imageTag.src = info[currentIndex].image
    nameTag.innerText = info[currentIndex].displayName

    currentMusic.play()
})

prevBtn.addEventListener("click", () => {
    currentIndex--
    if(currentIndex == -1)
    {
        currentIndex = info.length - 1
    }
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
    }
    currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
    imageTag.src = info[currentIndex].image
    nameTag.innerText = info[currentIndex].displayName

    currentMusic.play()
})

let isSliding = false

currentMusic.addEventListener("timeupdate", () => {
    if(!isSliding == true)
    {
        if(currentMusic.currentTime == currentMusic.duration)
        {
            nextBtn.click()
        }
        if(currentMusic.duration){
            totalTime.innerText =`${Math.floor(currentMusic.duration / 60)}:${Math.floor(currentMusic.duration % 60)}`
            currentTime.innerText = `${Math.floor(currentMusic.currentTime / 60)}:${Math.floor(currentMusic.currentTime % 60)}`
        }
        slider.value = (currentMusic.currentTime / currentMusic.duration) * 100
    }
})


slider.addEventListener("input", () => {
    isSliding = true
})

slider.addEventListener("change", () => {
    currentMusic.currentTime = (slider.value * currentMusic.duration) / 100
    isSliding = false
})

volumeSlider.addEventListener("change", () => {
    currentMusic.volume = volumeSlider.value / 100
})

window.addEventListener("load", () => {
    for(let item of info)
    {
        let dabba = document.createElement("div")
        dabba.classList.add("songCard")
        dabba.innerText = item.displayName
        dabba.style.border = "1px dotted gray"
        dabba.style.marginTop = "18px"
        dabba.style.padding = "5px"
        dabba.style.fontWeight = "bold"

       

        playlistContainer.appendChild(dabba)
    }
})

playlistContainer.addEventListener("click", (e) => {
    if(e.target.tagName == "DIV")
    {
        let obj = info.find((item) => {
            return item.displayName == e.target.innerText
        })
        currentMusic.src = `./media/${obj.trackName}.mp3`
        imageTag.src = obj.image
        nameTag.innerText = obj.displayName
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
        currentMusic.play()
    }
})