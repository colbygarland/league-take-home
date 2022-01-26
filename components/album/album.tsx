import { IAlbum } from '../../pages';

interface AlbumProps {
  album: IAlbum;
}

export const Album = ({ album }: AlbumProps) => {
  return (
    <div className="m-6">
      <a href="">
        <img
          className="h-64 w-64 rounded-lg shadow object-cover"
          src="https://lh3.googleusercontent.com/6nWKfIkPQM_Gv1CU-Pqru7z7Yh3wSpKTpR9aL1ufKevkfLl9mf579Dx80hLWjrYcRXL9Ff0ZO8CZSanNRTUswg076_dcFVYdKhY26Z1dMy9Omc1oOgkvZWEY8uzyWkN_e1-W62E7Aj7Dwc8fJRcGwEvboO5KlP27GMZcLYmjDL38F31t4pCZQOMWj7dC9p1JpwRxzDqAKLiTbQGuoArtRPfIIHBjDC95LUu6J2OyQonkC71ODdP2N4TW3eOzn8Rgeui_oyqaQp_Ae4Yx96kP9C-giKlafRwR99lRK5M-fw4swIVua9qsKKTNGNV7OK-uIQLKrm4wBHc9ogB3Bn7JSiAH_15n08xQLmruzAfUMmjpgnX6l2BGZ-SYs2ISc-PaPVF-2tgAH9mmb_6b7lcRDkHVJ0PgBrP9LQw6guinRQa_-PFbXboIbtyOwUytIR97FWUiVBUkJMipuNNoASKSSV1KHpwmD2wV9kjKMos89H_etQviKK2_1BkjGUdvf-BipFqNZGiSNbLmxyklP89Y-rEps1sCAVtV63GmMNhR8Vg36qr4AqjtJriw_MOTI0hFrHoBESK6cRuZoYjjSc_x3IqgFazdWYnA3lBSqqaU5I9oqqdo68Hrr8QXLgAOLh0DB4c6mf06Qs4Salz6LBlPaq2aPNdLo0S7zV-Tx5qtIkoRx5PgpHK8vpDId1ycpPZtdFyvr-3c9e8w0_DKLp2DvAs=w939-h1314-no?authuser=0"
          alt=""
        />
        <span className="pl-4 inline-block">
          <h3 className="mt-4 text-lg font-bold">{album.title}</h3>
          <p>123 items</p>
        </span>
      </a>
    </div>
  );
};
