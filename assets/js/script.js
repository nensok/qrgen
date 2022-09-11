const form  = document.getElementById('generate-form')
const qr  = document.getElementById('qrcode')

const onGenerate = (e) => {
    e.preventDefault()

    clear()

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    if(url === ''){
        alert('Enter a Valid URL')
    }else{
        generateQrCode(url, size)

        setTimeout(()=>{
            const saveUrl = qr.querySelector('img').src
            createSaveBtn(saveUrl)
        }, 50)
    }
}

const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text:url,
        width: size,
        height: size
    });
}

const clear = () =>{
    qr.innerHTML = ''
    const saveBtn = document.getElementById('save-link')
    if(saveBtn){
        saveBtn.remove()
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'btn btn-lg btn-danger mt-2'
    link.href = saveUrl
    link.download = 'qrcode'
    link.innerHTML = 'Download QR Code'
    document.getElementById('generated').appendChild(link)
}
form.addEventListener('submit', onGenerate)