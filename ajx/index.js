    // console.log('Hello World')

    let fetchbtn = document.getElementById('fetchbtn');
    fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler()
{
    var formdata = new FormData();
    formdata.append("id","1")
    formdata.append("title","hello there")
    formdata.append("completed","false")
    console.log(formdata)
    var request = new XMLHttpRequest();
    request.open("POST",'http://127.0.0.1:8000/api/create-task/')
    request.send(formdata)
    console.log('after post')

}

   /*  console.log('inside button click handler')
    const xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://127.0.0.1:8000/api/create-task/')
    xhr.setRequestHeader('Content-Type', 'application/json')
    console.log('after api')
    xhr.onload = function ()
    {
        if (xhr.status === 200)
        {
            console.log('success')
            console.log(this.responseText)
        }
        else
        {
            console.log('error')
        }
    }
    console.log('before send')
    xhr.send(JSON.stringify({
        "id": "1",
        "task": "test task",
        "completed": 'false'
    }))
    console.log('after send') */


   

let popbtn = document.getElementById('popbtn')
popbtn.addEventListener('click', popBtnHandler)

    function popBtnHandler()
    {
        console.log('inside function')
        const xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        console.log('after api')


        xhr.onload = function ()
        {
            if (this.status===200)
            {
                let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str = ""
            for (key in obj)
            {
                str += `<li>${obj[key].title}</li>`
            }
            list.innerHTML = str
            // console.log(str) 
            }
            else
            {
                console.log('Error')
            }
        }
        xhr.send()
    }