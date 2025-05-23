import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  urls,
  previewImage,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  // Use fallback image path if previewImage is undefined
  const imageSrc = previewImage ?? '/images/fallback.png';

  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        {urls?.[0]?.url ? (
          <Link noCustomization href={urls[0].url} externalLink>
            <Image
              src={imageSrc}
              alt={`${name} preview`}
              width={600}
              height={400}
              className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </Link>
        ) : (
          <Image
            src={imageSrc}
            alt={`${name} preview`}
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>

        {Array.isArray(urls) && urls.length > 0 && (

          <div className="flex flex-col gap-2">
            {urls.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                noCustomization
                className="flex items-center gap-2 self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                externalLink
              >
                <ExternalLink className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectDetails;
