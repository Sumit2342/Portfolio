import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoIcon = [
  {
    icon: <User2 size={20} />,
    text: 'Sumit Soreng',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+917250302774',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'soreng2000sumit@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 29 May, 2000',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'BTECH on Electronics and Communication Engineering',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Gumla, Jharkhand',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Birla Institute Of Technology, Mesra, Ranchi',
        qualification: 'Bachelors of Technology',
        years: '2019- 2023',
      },
      {
        university: 'Loyola Convent School, Booty, Ranchi',
        qualification: 'Intermediate',
        years: '2017- 2019',
      },
      {
        university: 'Notre Dame School, Gumla',
        qualification: 'Matriculation',
        years: '2016-2017',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Amdocs',
        qualification: 'Software Engineer',
        years: '2023-2024',
      },
      {
        company: 'BagFull',
        qualification: 'Software Engineer',
        years: '2020-2022',
      },
      {
        company: 'Microsoft',
        qualification: 'Software Engineer',
        years: '2019-2020',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, C++, Java',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className='pb-12 xl:h-[860px] xl:py-24'>
      <div className='mx-atuo container'>
        <h2 className='section-title mx-auto mb-8 text-center xl:mb-16'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='relative hidden flex-1 xl:flex'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills{' '}
                </TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className='mt-12 text-lg xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle mx-auto max-w-xl xl:mx-0'>
                      I specialize in crafting intuitive websites with cutting
                      edge Technology, delivering dynamic and engaging user
                      experience
                    </p>
                    {/* icons */}
                    <div className='mb-12 grid gap-4 xl:grid-cols-2'>
                      {infoIcon.map((item, index) => {
                        return (
                          <div
                            className='mx-auto flex items-center gap-x-4 xl:mx-0'
                            key={index}
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                            <div></div>
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill </div>
                      <div className='border-b border-border'></div>
                      <div>English,Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* Experience and education wrapper */}
                    <div className='grid gap-y-8 md:grid-cols-2'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex items-center gap-x-4 text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='font-medium capitalize'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, qualification, years } = item;
                              return (
                                <div
                                  className='group flex gap-x-8 '
                                  key={index}
                                >
                                  <div className='relative ml-2 h-[84px] w-[1px] bg-border'>
                                    <div className='absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]'></div>
                                  </div>
                                  <div>
                                    <div className='mb-2 text-xl font-semibold leading-none'>
                                      {company}
                                    </div>
                                    <div className='mb-4 text-lg leading-none text-muted-foreground'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex items-center gap-x-4 text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='font-medium capitalize'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className='group flex gap-x-8 '
                                  key={index}
                                >
                                  <div className='relative ml-2 h-[84px] w-[1px] bg-border'>
                                    <div className='absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]'></div>
                                  </div>
                                  <div>
                                    <div className='mb-2 text-xl font-semibold leading-none'>
                                      {university}
                                    </div>
                                    <div className='mb-4 text-lg leading-none text-muted-foreground'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    <div className='mb-16'>
                      <h4 className='mb-2 text-xl font-semibold'>Skills</h4>
                      <div className='mb-4 border-b border-border'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='mx-auto w-2/4 text-center xl:mx-0 xl:text-left'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className='mb-2 text-xl font-semibold xl:text-left'>
                        Tools
                      </h4>
                      <div className='mb-4 border-b border-border'></div>
                      {/* tools list */}
                      <div className='flex justify-center gap-x-8 xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
