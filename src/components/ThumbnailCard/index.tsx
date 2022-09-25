import { FC } from 'react';
import { Link, Path } from 'react-router-dom';
import Button from '../Button';

import './style.scss';

export interface IThumbnailCard {
  variant?: 'portrait' | 'landscape';
  assetUrl: string;
  title: string;
  summary: string;
  category: string;
  linkTo: string | Partial<Path>;
  className?: string;
}

const ThumbnailCard: FC<IThumbnailCard> = ({
  variant = 'portrait',
  assetUrl,
  title,
  summary,
  category,
  linkTo,
  className = '',
}) => {
  return (
    <Link to={linkTo} title={title}>
      <div className={`ThumbnailCard ${variant} ${className}`}>
        <img src={assetUrl} alt={title} />
        <div className="ThumbnailCard__details">
          <h5 className="ThumbnailCard__details-title">{title}</h5>
          <span className="ThumbnailCard__details-category">{category}</span>
          <span className="ThumbnailCard__details-summary">{summary}</span>
          <Button
            className="ThumbnailCard__details-button"
            buttonText=" + Add to watch list"
            onClick={() => null}
            variant="gray"
            isHoverActive
          />
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailCard;
