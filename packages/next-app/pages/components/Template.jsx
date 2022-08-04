import {Button, Container, Flex, Input, Skeleton, Stack, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {mixImg} from 'mix-img';
import { NFTStorage } from 'nft.storage'
import { Blob } from "@web-std/blob"

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4YjFDRUJDMDc5Mzk4NWNGNzM2NzNiNDI1MTVlOTQ0NzM4MmM3RGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTYzMTE2MTcyMSwibmFtZSI6InNhZiJ9.vQiFuB9ioSXaetLG0HjcNuR0zDYdldf9sySVjMCQSws'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const config ={
    "base": {
        "backgroundImg": "https://help.letsdeel.com/hc/article_attachments/4416233938961/mceclip0.png",
        "width": 948,
        "height": 1200,
        "quality": 1,
        "fileType": "jpeg",
        "dataType": "canvas"
    },
    "dynamic": [
        {
            "type": 2,
            "position": {
                "x": 187,
                "y": 350
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{variate}"
        },
        {
            "type": 2,
            "position": {
                "x": 687,
                "y": 350
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{country}"
        },
        {
            "type": 2,
            "position": {
                "x": 367,
                "y": 390
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{addressStreet}"
        },
        {
            "type": 2,
            "position": {
                "x": 277,
                "y": 430
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{addressCityTown}"
        },
        {
            "type": 2,
            "position": {
                "x": 787,
                "y": 430
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{addressCountry}"
        },
        {
            "type": 2,
            "position": {
                "x": 247,
                "y":585
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{identityNumber}"
        },
        {
            "type": 2,
            "position": {
                "x": 550,
                "y":620
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{dateBirth}"
        },
        {
            "type": 2,
            "position": {
                "x": 450,
                "y":660
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{resident}"
        },
        {
            "type": 2,
            "position": {
                "x": 250,
                "y":1090
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{signName}"
        },
        {
            "type": 2,
            "position": {
                "x": 250,
                "y":1140
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{printName}"
        },
        {
            "type": 2,
            "position": {
                "x": 750,
                "y":1100
            },
            "style": {
                "fontSize": 24,
                "color": "#000000",
                "textAlign": "center",
            },
            "text": "{signDate}"
        }
    ],
    "replaceText": {
        "variate": "field 1",
        "country":"field 2",
        "addressStreet":"field 3",
        "addressCityTown":"field 4",
        "addressCountry":"field 5",
        "identityNumber":"field 6",
        "dateBirth":"field 7",
        "resident":"field 8",
        "signName":"field 9",
        "printName":"field 10",
        "signDate":"field 11",

        "avatarUrl": "https://efe-h2.cdn.bcebos.com/ceug/resource/res/2020-12/1608522700040/yq3fma464m5y.png"
    }
}
class Template extends React.Component{

    state = {
        "variate": "field 1",
        "country":"field 2",
        "addressStreet":"field 3",
        "addressCityTown":"field 4",
        "addressCountry":"field 5",
        "identityNumber":"field 6",
        "dateBirth":"field 7",
        "resident":"field 8",
        "signName":"field 9",
        "printName":"field 10",
        "signDate":"field 11",
    }

    setName = (value)=>{
        this.setState({
            variate:value
        })
    }
    setCountry = (value)=>{
        this.setState({
            country:value
        })
    }
    setAddressStreet = (value)=>{
        this.setState({
            addressStreet:value
        })
    }
    setAddressCityTown = (value)=>{
        this.setState({
            addressCityTown:value
        })
    }
    setAddressCountry = (value)=>{
        this.setState({
            addressCountry:value
        })
    }
    setIdentityNumber = (value)=>{
        this.setState({
            identityNumber:value
        })
    }

    setDateBirth = (value)=>{
        this.setState({
            dateBirth:value
        })
    }
    setResident = (value)=>{
        this.setState({
            resident:value
        })
    }

    setSignName = (value)=>{
        this.setState({
            signName:value
        })
    }
    setPrintName = (value)=>{
        this.setState({
            printName:value
        })
    }
    setSignDate = (value)=>{
        this.setState({
            signDate:value
        })
    }

    async componentDidMount() {
        const res = await mixImg(config);
        console.log('图片合成结束~~', res);
        if (res.errno === 0 && res.data.canvas) {
            const length = document.getElementsByClassName('image-box')[0].children.length;
            if(length===0){
                document.getElementsByClassName('image-box')[0].appendChild(res.data.canvas);
            }
        }
    }

    download = async ()=>{
        let copyConfig = config;
        copyConfig['replaceText']['variate'] = this.state.variate;
        copyConfig['replaceText']['country'] = this.state.country;
        copyConfig['replaceText']['addressStreet'] = this.state.addressStreet;
        copyConfig['replaceText']['addressCityTown'] = this.state.addressCityTown;
        copyConfig['replaceText']['addressCountry'] = this.state.addressCountry;
        copyConfig['replaceText']['identityNumber'] = this.state.identityNumber;
        copyConfig['replaceText']['dateBirth'] = this.state.dateBirth;
        copyConfig['replaceText']['resident'] = this.state.resident;


        copyConfig['replaceText']['signName'] = this.state.signName;
        copyConfig['replaceText']['printName'] = this.state.printName;
        copyConfig['replaceText']['signDate'] = this.state.signDate;


        const res = await mixImg(copyConfig);
        console.log('图片合成结束~~', res);
        const imageData = res.data.canvas.toDataURL()

        const blob = this.dataURItoBlob(imageData)
        const metadata = await client.storeBlob(blob)
        window.open("https://ipfs.io/ipfs/"+metadata,"_blank")
    }

    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], {type: mimeString});
        return blob;

    }

    preview = async () => {
        let copyConfig = config;
        copyConfig['replaceText']['variate'] = this.state.variate;
        copyConfig['replaceText']['country'] = this.state.country;
        copyConfig['replaceText']['addressStreet'] = this.state.addressStreet;
        copyConfig['replaceText']['addressCityTown'] = this.state.addressCityTown;
        copyConfig['replaceText']['addressCountry'] = this.state.addressCountry;
        copyConfig['replaceText']['identityNumber'] = this.state.identityNumber;
        copyConfig['replaceText']['dateBirth'] = this.state.dateBirth;
        copyConfig['replaceText']['resident'] = this.state.resident;


        copyConfig['replaceText']['signName'] = this.state.signName;
        copyConfig['replaceText']['printName'] = this.state.printName;
        copyConfig['replaceText']['signDate'] = this.state.signDate;


        const res = await mixImg(copyConfig);
        console.log('图片合成结束~~', res);
        if (res.errno === 0 && res.data.canvas) {
            document.getElementsByClassName('image-box')[0].appendChild(res.data.canvas);
        }
    }

    render (){
        return (
            <>
                <Container
                    mb={"5em"}
                    border="1px solid #CBD5E0"
                    rounded={"10px"}
                    p={"2em"}
                    minWidth={"1000px"}
                    display={"flex"}
                    align={"center"}>
                    <div>
                        <div className="image-box">
                        </div>
                    </div>
                    <Stack spacing={"1em"} align={"center"}>
                        <Flex
                            w={"60%"}
                            justifyContent={"space-around"}
                            mb={"1em"}
                            alignItems={"center"}
                        >
                            <Text fontWeight={"700"}>Sign Fields </Text>
                        </Flex>

                        <Input
                            mx={"auto"}
                            variant={"outline"}
                            placeholder="field 1"
                            onChange={(e) => this.setName(e.target.value)}
                        />
                        <Input
                            mx={"auto"}
                            variant={"outline"}
                            placeholder="field 2"
                            onChange={(e) => this.setCountry(e.target.value)}

                        /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 3"
                        onChange={(e) => this.setAddressStreet(e.target.value)}

                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        onChange={(e) => this.setAddressCityTown(e.target.value)}

                        placeholder="field 4"
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        onChange={(e) => this.setAddressCountry(e.target.value)}
                        placeholder="field 5"
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 6"
                        onChange={(e) => this.setIdentityNumber(e.target.value)}
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 7"
                        onChange={(e) => this.setDateBirth(e.target.value)}
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 8"
                        onChange={(e) => this.setResident(e.target.value)}
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 9"
                        onChange={(e) => this.setSignName(e.target.value)}
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 10"
                        onChange={(e) => this.setPrintName(e.target.value)}
                    /><Input
                        mx={"auto"}
                        variant={"outline"}
                        placeholder="field 11"
                        onChange={(e) => this.setSignDate(e.target.value)}
                    />

                        <Button
                            fontWeight={"700"}
                            mt={"1em"}
                            onClick={() => this.preview()}
                        >
                            Generate preview
                        </Button>

                        <Button
                            fontWeight={"700"}
                            mt={"1em"}
                            onClick={() => this.download()}
                        >
                            Generate final image url
                        </Button>
                    </Stack>
                </Container>

            </>
        );
    }
}

export default Template;