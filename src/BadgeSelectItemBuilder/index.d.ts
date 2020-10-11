import * as React from 'react';

export type BadgeSelectItemBuilderFn = (data: {
  id: string | number;
  text: React.ReactNode;
  subtitle?: string;
  skin: BadgeSelectItemSkin;
}) => {
  id: string | number;
  value: React.ReactNode;
};

export type BadgeSelectItemSkin =
  | 'general'
  | 'secondaryText'
  | 'danger'
  | 'standard'
  | 'backgroundSecondary'
  | 'primaryLightText'
  | 'success'
  | 'warning'
  | 'urgent'
  | 'neutral'
  | 'neutralStandard'
  | 'mainMutedHover'
  | 'neutralSuccess'
  | 'successMutedHover'
  | 'neutralDanger'
  | 'dangerMutedHover'
  | 'neutralLight'
  | 'warningLight'
  | 'premium';

export const badgeSelectItemBuilder: BadgeSelectItemBuilderFn;
