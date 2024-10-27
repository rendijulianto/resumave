import Link from 'next/link';
import ImgTilt from './ImgTilt';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

const page = () => {
    return (
        <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-3 py-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="">
                <h4 className="text-base md:text-xl">
                    <span className="text-gradient">
                        Pembuat Resume Gratis dan Sumber Terbuka
                    </span>
                </h4>
                <h1 className="text-3xl md:mt-2 md:text-4xl 2xl:text-[2.75rem] ">
                    <span className="text-gradient">Membangun Resume Menjadi Lebih Mudah</span>
                </h1>
                {/* <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                    Welcome to Resumave! Making a great resume is easy here. Our tool helps you create a ATS friendly
                    resumes.{' '}
                    <span className="hidden md:inline">
                        It makes sure you look good to employers. Say bye-bye to resume worries and hello to Resumave.
                        Start now and get closer to your dream job!
                    </span>
                </p> */}
                <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                Resumave adalah pembuat resume yang ramah ATS, dirancang untuk menyederhanakan proses pembuatan resume profesional
                    <span className="hidden md:inline">
                    anpa perlu login atau mendaftar. Dengan Resumave, pengguna dapat dengan mudah memasukkan data mereka, menghasilkan resume yang terformat dengan baik, dan mengekspornya dalam format PDF ukuran A4.
                    </span>
                </p>

                <div className="mt-8 flex flex-col items-center justify-start gap-3 md:mt-16 md:flex-row md:gap-8">
                    <Link href={'/editor'} className="btn-filled w-full md:w-auto">
                        <span>Buat Resume Sekarang</span>
                        <IoIosRocket />
                    </Link>

                    <a href="https://github.com/rendijulianto/resumave/tree/general-id" className="btn w-full md:w-auto">
                        <span>Liat Kode</span>
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div>
                <ImgTilt>
                    <img src="/sample.png" />
                </ImgTilt>
            </div>
        </div>
    );
};

export default page;
