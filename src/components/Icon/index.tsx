import React from 'react';

export interface IconProps {
  icon: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24 }) => {
  return <img src={icon} height={size} width={size} />;
};

export default Icon;
