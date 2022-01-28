import { IAlbum } from '../../pages';
import Link from 'next/link';

interface AlbumProps {
  album: IAlbum;
}

export const Album = ({ album }: AlbumProps) => {
  return (
    <Link href={`/albums/${album.id}`}>
      <a className="m-6 inline-block">
        <AlbumCover />
        <span className="pl-4 inline-block">
          <h3 className="mt-4 text-lg font-bold">{album.title}</h3>
          <p>123 items</p>
        </span>
      </a>
    </Link>
  );
};

const AlbumCover = () => {
  return (
    <div className="h-64 w-64 rounded-lg shadow object-cover flex justify-center items-center">
      <svg width="156" height="131" viewBox="0 0 156 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M66.4723 0V48.7749H115.156V28.2237H86.9853V0H66.4723Z" fill="#501CD2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M38.5746 48.7749H59.3611V27.9497H38.5746V48.7749Z" fill="#01C3A2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M66.4723 76.7244H87.2587V55.8992H66.4723V76.7244Z" fill="#01C3A2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.1272 113.361C85.9636 113.361 83.7818 110.85 83.7818 107.3C83.7818 103.806 85.9636 101.24 89.1272 101.24C92.2909 101.24 94.4181 103.642 94.4181 107.573C94.4181 111.559 92.2909 113.361 89.1272 113.361ZM79.309 128.977C81.8727 130.014 85.2545 130.779 88.3091 130.779C93.1636 130.779 96.3273 129.523 98.6182 127.011C100.527 124.936 101.509 122.043 101.509 118.439V95.343H94.3636V98.4006C92.8909 96.6534 90.5454 95.0154 87.1636 95.0154C83.3454 95.0154 76.2 97.8546 76.2 107.464C76.2 117.074 83.2909 119.586 87.3272 119.586C90.2727 119.586 92.6727 118.712 94.4182 116.692V118.057C94.4182 121.497 92.2363 123.954 88.5272 123.954C84.6545 123.954 81.2181 122.534 81.2181 122.534L79.309 128.977Z"
          fill="#250D53"
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 120.732H23.1818V113.743H8.18182V89.2825H0V120.732Z" fill="#250D53" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128.073 95.3432H120.982V110.795C120.818 112.925 118.745 114.399 116.564 114.399C114 114.399 112.145 112.925 112.145 110.413V95.2886H105.055V110.467C105.055 116.583 108.164 121.169 114.655 121.169C117.164 121.169 119.291 120.132 121.091 118.385V120.623H128.236V95.3432H128.073Z"
          fill="#250D53"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.945 104.953C138.654 102.386 140.509 101.021 143.291 101.021C145.964 101.021 147.764 102.496 148.145 104.953H137.945ZM143.509 94.9062C135.927 94.9062 130.636 100.312 130.636 108.01C130.636 115.873 136.527 121.114 144.6 121.114C148.909 121.114 151.964 120.132 154.145 119.04L151.8 113.307C149.673 114.126 147.655 114.399 145.036 114.399C141.382 114.399 138.655 112.324 138 110.249H155.891V108.174C155.945 99.9841 150.927 94.9062 143.509 94.9062Z"
          fill="#250D53"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.6 109.867V110.467C66.6 113.143 64.3091 115.163 61.3091 115.163C59.291 115.163 58.1455 114.344 58.1455 112.924C58.1455 111.669 59.1273 110.795 60.8728 110.577L66.6 109.867ZM62.2364 95.0154C56.2364 95.0154 52.0364 96.8718 52.0364 96.8718L53.9455 103.096C53.9455 103.096 57.7091 101.622 62.2364 101.622C64.691 101.622 66.6001 102.496 66.6001 104.079V104.625L65.6182 104.734L59.5637 105.28C54.0546 105.881 50.7819 108.938 50.7819 113.307C50.7819 118.002 54.3273 121.224 59.4001 121.224C62.3455 121.224 64.9091 120.077 66.6001 118.057V120.678H73.7455V105.335C73.7455 98.4552 69.7092 95.0154 62.2364 95.0154Z"
          fill="#250D53"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.5272 104.953C32.2363 102.386 34.0909 101.021 36.8727 101.021C39.5454 101.021 41.3454 102.496 41.7272 104.953H31.5272ZM37.0909 94.9062C29.509 94.9062 24.2181 100.312 24.2181 108.01C24.2181 115.873 30.109 121.114 38.1818 121.114C42.4909 121.114 45.5454 120.132 47.7272 119.04L45.3818 113.307C43.2545 114.126 41.2363 114.399 38.6181 114.399C34.9636 114.399 32.2363 112.324 31.5818 110.249H49.4727V108.174C49.5272 99.9841 44.509 94.9062 37.0909 94.9062Z"
          fill="#250D53"
        />
      </svg>
    </div>
  );
};
