import Image from 'next/image';

import KshitijFullPose from '/public/images/kshitij-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={KshitijFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

   {/* Content */}
   <div className="flex max-w-xl flex-col gap-6">
  <Typography variant="h3">
    Curious about me? Here you have it:
  </Typography>
  <Typography>
    I&apos;m a data-driven,{' '}
    <Link
      noCustomization
      externalLink
      withUnderline
      href="https://www.linkedin.com/in/kshitijhereforit"
    >
      self-taught analyst
    </Link>{' '}
    with a strong foundation in finance and a growing love for data science. I
    specialize in turning raw numbers into meaningful business insights using
    SQL, Python, and Power BI.
  </Typography>
  <Typography>
    My journey started in finance, but my curiosity for data pushed me into
    analytics. From spreadsheets to dashboards, I’ve evolved into someone who
    finds stories in data and builds visuals that speak volumes. I enjoy
    automating reports, optimizing queries, and making sense of complex datasets.
  </Typography>
  <Typography>
    I’m always learning—whether it’s new Python libraries, better dashboarding
    techniques, or building passion projects that help sharpen my skills. I
    believe in clean, clear, and concise storytelling—backed by numbers.
  </Typography>
  <Typography>
    When I’m not in full-on analyst mode, you’ll probably find me reading about
    emerging tech for thoughts on data. Check out my{' '}
    <Link
      noCustomization
      externalLink
      withUnderline
      href="https://github.com/krishna28zorg"
    >
      GitHub
    </Link>{' '}
    where I’m  sharing my findings and learnings.
  </Typography>
  <Typography>Here are a few quick bits about me:</Typography>
  <div className="flex flex-col gap-2 md:flex-row md:gap-6">
    <ul className="flex list-inside list-disc flex-col gap-2">
      <Typography component="li">B.Sc. in Computer Science</Typography>
      <Typography component="li">Finance + Analytics background</Typography>
    </ul>
    <ul className="flex list-inside list-disc flex-col gap-2">
      <Typography component="li">Curious & data-obsessed</Typography>
      <Typography component="li">Aspiring data scientist</Typography>
    </ul>
  </div>
  <Typography>
    Lastly, I’m open to freelance or remote data gigs—feel free to reach out. I
    love solving problems with data, and I’d love to help you with yours. Let’s
    connect!
  </Typography>
</div>

      </div>
    </Container>
  );
};

export default AboutMeSection;
