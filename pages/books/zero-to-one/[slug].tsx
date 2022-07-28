import Head from 'next/head';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const components = {
  Head,
  Image,
  Link,
};
