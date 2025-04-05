'use client'

import { useEffect } from 'react';

type UpdateTitleProps = {
  title: string;
};

export default function UpdateTitle({ title }: UpdateTitleProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
