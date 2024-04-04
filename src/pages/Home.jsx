
import React, { useEffect } from 'react'
import Profilepict from '../assets/img/illustration_6.png'
import Img2 from '../assets/img/illustration_7.png'
import ProjectCard from '../components/ProjectCard'
import ArtikelCard from '../components/ArtikelCard'
import Experience from '../components/Experience'
import PageLink from '../components/PageLink'
import Img3 from '../assets/img/bangkit.jpg'
import Img4 from '../assets/img/img.png'
import { truncate } from '../modules/utils'


const data = [
    {
    title: 'Student',
    institution: 'Bangkit Academy',
    dateIn: 'Feb 2023',
    dateOut: 'June 2023',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia saepe ullam corporis vel. Corporis, explicabo autem dolor beatae vero, culpa nesciunt facere nobis, sint maxime laboriosam aspernatur accusamus amet alias.'
    },
    {
    title: 'Student',
    institution: 'Bangkit Academy',
    dateIn: 'Feb 2023',
    dateOut: 'June 2023',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia saepe ullam corporis vel. Corporis, explicabo autem dolor beatae vero, culpa nesciunt facere nobis, sint maxime laboriosam aspernatur accusamus amet alias.'
    }
    
    
];


const project = [
    {
    institution: 'EcoGreenPath',
    dateIn: 'Feb 2023',
    dateOut: 'June 2023',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia saepe ullam corporis vel. Corporis, explicabo autem dolor beatae vero, culpa nesciunt facere nobis, sint maxime laboriosam aspernatur accusamus amet alias.',
    img : 'Img3'
    },
    {
    institution: 'EcoGreenPath',
    dateIn: 'Feb 2023',
    dateOut: 'June 2023',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia saepe ullam corporis vel. Corporis, explicabo autem dolor beatae vero, culpa nesciunt facere nobis, sint maxime laboriosam aspernatur accusamus amet alias.',
    img : 'Img3'
    }
    
];

const Home = () => {
    // useEffect (() => {
    //     alert("This site is still under development. We are really sorry if some features do not worked as they should")
    // },[1])

  return (
    <>
        <div id="home" class="hero max-w-5xl mx-auto py-8 md:py-8 lg:py-20 px-5">
            <div class="flex flex-col gap-y-10 md:flex-row justify-between items-center">
                <div class="flex flex-col gap-y-8 md:basis-2/4 lg:basis-3/6">
                    <div class="hidden small-badge md:flex flex-row bg-white rounded-full px-4 py-2 w-fit">
                        <p class="flex flex-rows gap-x-2 items-center text-sm lg:text-base font-semibold text-indigo-950 ">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.50001 3.5H9.50001C7.55001 9.34 7.55001 15.66 9.50001 21.5H8.50001" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.5 3.5C17.45 9.34 17.45 15.66 15.5 21.5" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 16.5V15.5C9.34 17.45 15.66 17.45 21.5 15.5V16.5" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 9.50001C9.34 7.55001 15.66 7.55001 21.5 9.50001" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            I believe in user centered digital experience!
                        </p>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <h1 class="font-['Clash_Display'] text-center md:text-left text-4xl md:text-[50px] lg:text-[70px] leading-none">
                            Hi, I am Tiara!
                        </h1>
                        <p class="text-indigo-950/50 text-sm md:text-base text-center md:text-left">
                            A Fullstack Web Developer
                        </p>
                        <p class="leading-loose text-justify text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam consectetur perspiciatis minus, dolores harum nam? Est, error? Libero architecto sint sit totam, sed nisi magni dignissimos! A, aliquam tenetur?
                        </p>
                    </div>
                    <div class="flex flex-col gap-y-10 md:flex-row gap-x-8">
                        <a href="/resume-tiara" class="w-full md:w-fit bg-violet-600 px-5 py-3 hover:bg-indigo-950 rounded-full text-[#f1f4f5] font-semibold text-center">
                            Get Resume
                        </a>
                        <a href="" class="flex flex-row items-center gap-x-2 text-violet-600 font-semibold justify-center">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.89999 22H15.1" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.5 18.4V22" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.9955 7.25H19.0045" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.1957 7.25H16.2047" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.3954 7.25H13.4044" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Let's have a talk!
                        </a>
                    </div>
                </div>

                <div class="flex flex-row order-first md:order-last">
                    <img src={Profilepict} class=" h-[250px] md:h-[400px] md:basis-2/4 object-cover"/>
                </div>
            </div>
        </div>
        
    
        <div id="features" class=" max-w-5xl mx-auto px-4 space-y-6 py-8  md:py-8 lg:py-20 ">
            
           
            
            <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                <h1 class="font-['Clash_Display'] text-3xl text-center  lg:text-5xl leading-none text-indigo-950">
                    What I Do
                </h1>

                <p class="text-indigo-950 md:w-1/2 md:mx-auto md:text-center text-justify leading-relaxed  text-base pb-8">
                    The product can personalize user experiences by understanding individual preferences and tailoring
                    recommendations or content based on user behavior and historical data.
                </p>

            </div>
            <div className="circle w-[590px] h-[400px] bg-violet-400 rounded-[100%] absolute -z-20 md:top-[700px] md:left-[2%] blur-[195px]  right-10 "></div>

            <div class=" mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                <div class="relative overflow-hidden rounded-lg  border  bg-white/35 backdrop-blur-md select-none hover:shadow hover:shadow-violet-600 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg viewBox="0 0 512 512" class="h-12 w-12 fill-current">
                        <path fill="currentColor" d="M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5a132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"/>
                    </svg>
                        <div class="space-y-2">
                            <h3 class="font-bold">Social Media</h3>
                            <p class="text-sm text-muted-foreground">Social media management and content creation.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white/35 backdrop-blur-md  select-none hover:shadow hover:shadow-violet-600 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <div className="flex flex-row gap-x-2 items-center">
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path
                                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                                </path>
                            </svg>
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                            <path
                                d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                            </path>
                            </svg>
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path fill="currentColor" d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.315.315 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55zm-3.76 6.46V13.6l-6.9 3.94v3.61zM2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82zm3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5zm3.45 10.2V5L6.67 6.82v7.87zm7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8zm-.31 4.15l-3.14-1.8v3.57l3.14 1.78zM10.12 17L17 13.06l-3.12-1.8L7 15.23z"/>
                            </svg>
                            {/* <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path
                                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
                                </path>
                            </svg> */}
                            
                            
                        </div>
                        <div class="space-y-2">
                            <h3 class="font-bold">Fullstack Web Development</h3>
                            <p class="text-sm">Server and Client Components. Use hook.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white/35 backdrop-blur-md  select-none hover:shadow hover:shadow-violet-600 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <div className="flex flex-row gap-x-2 items-center">
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path fill="currentColor" d="M18.68 12.32a4.49 4.49 0 0 0-6.36.01a4.49 4.49 0 0 0 0 6.36a4.508 4.508 0 0 0 5.57.63L21 22.39L22.39 21l-3.09-3.11c1.13-1.77.87-4.09-.62-5.57m-1.41 4.95c-.98.98-2.56.97-3.54 0c-.97-.98-.97-2.56.01-3.54c.97-.97 2.55-.97 3.53 0c.97.98.97 2.56 0 3.54M10.9 20.1a6.527 6.527 0 0 1-1.48-2.32C6.27 17.25 4 15.76 4 14v3c0 2.21 3.58 4 8 4c-.4-.26-.77-.56-1.1-.9M4 9v3c0 1.68 2.07 3.12 5 3.7v-.2c0-.93.2-1.85.58-2.69C6.34 12.3 4 10.79 4 9m8-6C7.58 3 4 4.79 4 7c0 2 3 3.68 6.85 4h.05c1.2-1.26 2.86-2 4.6-2c.91 0 1.81.19 2.64.56A3.215 3.215 0 0 0 20 7c0-2.21-3.58-4-8-4"/>
                            </svg>
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path fill="currentColor" d="M6.757 1.501L4 18.5L9.473 4.816L7.695 1.353a.5.5 0 0 0-.938.148m4.807 2.817L4 18.5l9.84-11.55l-1.399-2.623a.5.5 0 0 0-.877-.01m-.624 18.52L4 18.5L17.31 5.665a.5.5 0 0 1 .832.296L20 18.5l-6.94 4.337a2 2 0 0 1-2.12 0"/>
                            </svg>
                            <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current">
                                <path fill="currentColor" d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564l.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788l-.018-4.618l-3.074-1.756V7.603z"/>
                            </svg>
                        </div>
                    
                        <div class="space-y-2">
                            <h3 class="font-bold">DBMS and Machine Learning</h3>
                            <p class="text-sm text-muted-foreground">ORM using Prisma and deployed on PlanetScale.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
       

        <div id="about" class="about max-w-5xl mx-auto  md:py-8 lg:py-20 pb-12 px-5 ">
            <div class="space-y-4">
                <h1 class="font-['Clash_Display'] text-3xl text-center  lg:text-5xl leading-none text-indigo-950">
                    What I've Been Thru 
                </h1>
                <p class="text-indigo-950 md:w-1/2 md:mx-auto md:text-center text-justify leading-relaxed  text-base pb-8">
                    The product can personalize user experiences by understanding individual preferences and tailoring
                    recommendations or content based on user behavior and historical data.
                </p>
            </div>
            <div class="flex flex-col gap-y-10 md:flex-row justify-between items-center md:pt-12">
                <div class="md:flex md:flex-row hidden ">
                    <img src={Img2} class="h-[379px] md:h-[400px] md:basis-2/4"/>
                </div>
                <div class="flex flex-col gap-y-8 md:basis-2/4 lg:basis-3/6 ">  
                    <Experience data={data}/>
                </div>
            </div>
            <PageLink desc={'Get to know me more'} title={'View Resume'} link={'#'}/>
        </div>


        <div id="project" class="project container max-w-5xl mx-auto  md:py-8 lg:py-20  pb-12 px-5">
            <div className="space-y-4">
            <h3 class="font-['Clash_Display'] text-3xl lg:text-5xl text-center text-indigo-950 ">
                Things I've Done
            </h3>
            <div className="mt-10 circle w-[590px] h-[400px] bg-violet-400 rounded-[100%] absolute -z-20 md:left-0  lg:left-[40%] blur-[195px] right-10">
            </div>
            <p class="text-indigo-950 md:w-1/2 md:mx-auto md:text-center text-justify pb-8 leading-relaxed  text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quod atque aut! Vitae, deleniti eaque hic at accusantium repellat corrupti nisi deserunt!
            </p>
            </div>
            
            <div className="cards flex flex-wrap gap-y-3  justify-between">
                {
                    project.slice(0,4).map((item, index) =>(
                        <ProjectCard key={index} img={Img3} institution={item.institution} dateIn={item.dateIn} dateOut={item.dateOut} desc={truncate(item.description, 80)}/>
                    ))
                    
                }
            </div>
            <PageLink desc={'Curious about my other works?'} title={'View Projects'} link={'/projects'}/>
        </div>

        <div id="article" class="project max-w-5xl mx-auto pb-12 px-5  md:py-8 lg:py-20 ">
            <div className="space-y-4">
                <h3 class=" font-['Clash_Display'] text-3xl lg:text-5xl text-center text-indigo-950">
                My Writings
                </h3>
                <p class="text-indigo-950 md:w-1/2 md:mx-auto md:text-center text-justify pb-8 leading-relaxed  text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quod atque aut! Vitae, deleniti eaque hic at accusantium repellat corrupti nisi deserunt!
                </p>
            </div>
            
            <div class="cards flex flex-wrap justify-between gap-y-3">
                <ArtikelCard img={Img4} title={"Why data is today's new oil kenapa  yaaa ada apa gerangan..."} category={'Data and ML'} date={'a month ago'} />
                <ArtikelCard img={Img4} title={"Why data is today's new oil kenapa  yaaa ada apa gerangan..."} category={'Data and ML'} date={'a month ago'} />
                <ArtikelCard img={Img4} title={"Why data is today's new oil kenapa  yaaa ada apa gerangan..."} category={'Data and ML'} date={'a month ago'} />
            </div>
            
            <PageLink desc={'Explore more about me'} title={'View Blogs'} link={'#'}/>

            
        </div>

        <div id="article" class="project max-w-5xl mx-auto pb-12 px-5 py-16  md:py-8 lg:py-20 ">
            
            <div className="w-[50%] mx-auto text-center">
                <h3 class=" font-['Clash_Display'] text-1xl lg:text-xl  text-indigo-950">
                That's All! <br/> It appears you've reached the end of this page. Now, Let's have us a tea, shall we?
                </h3>
            </div>
            
            <PageLink desc={'Just Wanna Say Hi?'} title={'ChatMe'} link={'#'}/>
            
            

            
        </div>

    </>
  )
}

export default Home
