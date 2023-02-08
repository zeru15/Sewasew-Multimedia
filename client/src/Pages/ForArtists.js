import React, { useState, useRef } from 'react'
import Header from '../Components/Header'
import { FaInfinity } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'
import { GiOnTarget } from 'react-icons/gi'
import { GoFlame } from 'react-icons/go'
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from "primereact/radiobutton";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

function ForArtists() {

    const [selectedProfession, setSelectedProfession] = useState(null);
    const [lookingTo, setLookingTo] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [album, setAlbum] = useState('');

    const proffession = [
        { name: 'Professional Artist' },
        { name: 'Aspiring Artist' }
    ];
    const option = [
        { name: 'Publish My Work' },
        { name: 'Do Promotions For Sewasew' },
        { name: 'Do Promotions On Sewasew' }
    ];

    const toast = useRef(null);

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };


    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div className='heroBg h-screen'>
                <div className='ml-64 pt-36  '>
                    <div className='text-white text-5xl font-bold '>
                        Grow Your <br /> Audience
                    </div>
                    <div className='text-sewasew-yellow text-xl mt-2 '>
                        Get discovered throuh sewasew!
                    </div>
                    <div className='text-white mt-6 '>
                        You can easily reach your audience on Sewasew <br /> app. Sign Up now to join the Sewasew <br /> Community
                    </div>
                    <div className='mt-4'>
                        <button className='bg-sewasew-yellow px-6 py-2 font-semibold text-sm'> GET STARTED </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='bg-sewasew-yellow flex gap-x-40 p-28 text-3xl font-light text-sewasew-brown '>
                <div>
                    <FaInfinity className='m-auto ' size={50} />
                    <p className='hover:text-white'> Unlimited Uploads </p>
                </div>
                <div>
                    <FaRegCopyright className='m-auto' size={50} />
                    <p className='hover:text-white' > Copy-write <br /> Protected </p>
                </div>
                <div>
                    <GiOnTarget className='m-auto' size={50} />
                    <p className='hover:text-white'> Targeted <br /> Audience </p>
                </div>
                <div>
                    <GoFlame className='m-auto' size={50} />
                    <p className='hover:text-white'> Ignite Your <br /> Creativity </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div>
                <div className='text-center text-sewasew-brown text-4xl mt-16 '> Contact Us Now! </div>
            </div>
            <div className='items-center'>

                <form>
                    <div className='flex'>
                        <div className='m-auto flex gap-x-8 mt-10 '>
                            <div className=''>
                                <label className='text-sewasew-yellow text-xl mb-2 '> I AM </label> <br />
                                <Dropdown value={selectedProfession} onChange={(e) => setSelectedProfession(e.value)} options={proffession} optionLabel="name"
                                    placeholder="Select" className="p-inputtext-lg w-[16rem]" />
                            </div>
                            <div>
                                <label className='text-sewasew-yellow text-xl mb-2 '> Looking to</label> <br />
                                <Dropdown value={lookingTo} onChange={(e) => setLookingTo(e.value)} options={option} optionLabel="name"
                                    placeholder="Select" className="p-inputtext-lg w-[16rem]" />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='m-auto flex gap-x-8 mt-10 '>
                            <div>
                                <label className='text-sewasew-yellow text-xl mb-2 '> Name </label> <br />
                                <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className='p-inputtext-lg w-[16rem]' />
                            </div>
                            <div>
                                <label className='text-sewasew-yellow text-xl  mb-2 '> Phone </label> <br />
                                <InputText value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className='p-inputtext-lg w-[16rem]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='m-auto flex gap-x-8 mt-10 '>
                            <div>
                                <label className='text-sewasew-yellow text-xl mb-2 '> Email </label> <br />
                                <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="My e-mail is" className='p-inputtext-lg w-[34rem]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='m-auto flex gap-x-48 mt-10 '>
                            <div>
                                <label className='text-sewasew-yellow text-xl  mb-2 '> ሙሉ አልበም አላችሁ (Do <br /> you have an entire <br /> album worth of <br /> work?) </label>
                                <div className='flex '>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="album1" name="album" value="Yes" onChange={(e) => setAlbum(e.value)} checked={album === 'Yes'} />
                                        <label htmlFor="album1" className="ml-2"> Yes </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="album2" name="album" value="No" onChange={(e) => setAlbum(e.value)} checked={album === 'No'} />
                                        <label htmlFor="album2" className="ml-2"> No </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='text-sewasew-yellow text-xl  mb-2 '> ሙዚቃዎን መርጠው <br /> ይላኩልን (Sample <br /> Music up to 10MB)  </label> <br />
                                <Toast ref={toast}></Toast>
                                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
                            </div>
                        </div>
                    </div>
                    <div className='flex '>
                        <button type="submit" className='mx-auto bg-sewasew-brown text-white w-[34rem] py-2 mt-10 mb-40 '> SEND </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ForArtists