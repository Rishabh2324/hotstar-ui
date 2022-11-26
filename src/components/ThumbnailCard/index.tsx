import { FC } from 'react';
import { Link, Path } from 'react-router-dom';

import useDeviceCheck from '../../hooks/useDeviceCheck';
import Button from '../Button';

import './style.scss';

export interface IThumbnailCard {
  assetUrl: string;
  title: string;
  summary: string;
  category: string;
  linkTo: string | Partial<Path>;
  className?: string;
}

const ThumbnailCard: FC<IThumbnailCard> = ({
  assetUrl,
  title,
  summary,
  category,
  linkTo,
  className = '',
}) => {
  const { deviceType } = useDeviceCheck();
  return (
    <Link to={linkTo} title={title}>
      <div className={`ThumbnailCard ${className}`}>
        <img src={assetUrl} alt={title} />
        {deviceType === 'desktop' && (
          <>
            <div className="ThumbnailCard__details">
              <h5 className="ThumbnailCard__details-title">{title}</h5>
              <span className="ThumbnailCard__details-category">
                {category}
              </span>
              <span className="ThumbnailCard__details-summary">{summary}</span>
              <Button
                className="ThumbnailCard__details-button"
                buttonText=" + Add to watch list"
                onClick={() => null}
                variant="gray"
                isHoverActive
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ThumbnailCard;
