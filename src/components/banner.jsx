'use client'

import React, { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { GiIndiaGate } from "react-icons/gi";

const people = [
  {
    id: 1,
    name: 'Co-working',
    avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const peoples = [
  {
    id: 1,
    name: 'South Delhi',
  },
  {
    id: 2,
    name: 'Gurgaon',
  },
];

const Banner = () => {
  const [selected, setSelected] = useState(people[0]);
  const [select, setSelect] = useState(peoples[0]);

  return (
    <div className='w-full bg-slate-20 h-[91vh]'>
      <div className='md:max-w-[1100px] mx-auto grid grid grid-cols-1 md:grid-cols-2 p-3 py-[10px] md:py-[30px] gap-6 '>
        <div className='text-black text-[30px] grid   md:text-[36px] '>
          <h1 className='pt-[100px] font-serif  grid justify-center md:justify-start'>Choose from 100,000+</h1>
          <span className='font-serif ' >spaces to <span className='text-[#4343e8] font-serif  '>Work</span> & <span className='text-[#4343e8] font-serif '>Live</span></span>
          <div className='grid grid grid-cols-1 md:grid-cols-2 gap-2 border '>
            <div className='
            '>
              <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    {selected && <img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />}
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 max-w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <div className="flex items-center">
                        <img alt="" src={person.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                        <span className="ml-3 block truncate font-normal group-selected:font-semibold">
                          {person.name}
                        </span>
                      </div>
                      {selected?.id === person.id && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-focus:text-white">
                          <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div className='text-sm sm:text-sm '>
              <Listbox value={select} onChange={setSelect}>
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 mt-[4.8px] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{select.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className=" absolute z-10 mt-1 max-h-56 max-w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {peoples.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <div className="flex items-center">
                        <span className=" ml-3 block truncate font-normal group-selected:font-semibold">
                          {person.name}
                        </span>
                      </div>
                      {select?.id === person.id && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-focus:text-white">
                          <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
              <div className=''>
                
              </div>
            </div>
          </div>
          <div className='grid grid grid-cols-4 md:grid-cols-5  py-[25px] items-center text-center gap-4 '>
           <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-sm'>
        <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
   <span className='rounded-full text-[10px]'>Green park</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Vasant vihar</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Hauz khas</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Nehru place</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Saket</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Okhla Estate</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Vasant Kunj</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Vasant Vihar</span> 
    </button>
            </div>
           
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Dlf</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[8px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Lajpat nager</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[8px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>Gurugram</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>South Delhi</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>South Delhi</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>South Delhi</span> 
    </button>
            </div>
            <div className=' rounded-full bg-[#e2e3e5] hover:bg-[#cfe2ff] ease-in duration-300'>
            <button className='text-[10px]'>
            <GiIndiaGate  color="rgb(210, 122, 15)" size={50}/>
            <span className='rounded-full text-[10px]'>South Delhi</span> 
    </button>
            </div>

          </div>
        </div>
        <div className='hidden md:grid  shadow-2xl col-span-1'>
      <Image 
       src="/banners.jpg"
       width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: '74.2vh' }} // optional
 className=' rounded-bl-[200px]'
      />
          </div>
          
      </div>
    </div>
  );
}

export default Banner;
