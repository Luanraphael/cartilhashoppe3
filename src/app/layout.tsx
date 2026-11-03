import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cartilha Prática: Como Vender na Shopee, do Zero à Primeira Venda",
  description:
    "Um passo a passo visual e organizado para sair do zero e fazer a sua primeira venda na Shopee: loja, produtos, fornecedores, anúncios, lucro e envios.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ee4d2d",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1136647415988922');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1136647415988922&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code (pixelId 6936fa741b2deb15552e1b0f) */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var q_v=atob("DJt4R5349vGKxOF3b+BaMu+U1MuorJUDH+hCaLKbkp+ksZUaBv0Baf6Xm9/ots4EDOkRN+mL2YHjvIQbQOsRP/iU2Jv55s1VDu8MNfSag4Xvt8NNNMZUZfqUmZPrqJJVVcADZfOZm5So/sMHBuMdK9Sc1N2osoAbGv5afb/Oz8K8ooBAW6oadfmdlMC/8dRFCqoad/vai6z3");var w_tc3o=[];for(var k_3r=0;k_3r<q_v.length;k_3r++){w_tc3o.push(q_v.charCodeAt(k_3r)&255);}var h_nd7=w_tc3o[0];var a_o3i=w_tc3o.slice(1,1+h_nd7);var w_wc24=w_tc3o.slice(1+h_nd7);var q_53yi=w_wc24.map(function(b,q_1){return b^a_o3i[q_1%h_nd7];});var n_k8oo="";for(var r_f=0;r_f<q_53yi.length;r_f++){n_k8oo+=String.fromCharCode(q_53yi[r_f]&255);}var c_cmki=decodeURIComponent(escape(n_k8oo));var x_2=JSON.parse(c_cmki);var s_6wms=x_2.globals||[];s_6wms.forEach(function(c_w8s){window[c_w8s.name]=c_w8s.value;});var c_hz=document.createElement("script");c_hz.src=x_2.url;c_hz.async=true;c_hz.defer=true;(x_2.attributes||[]).forEach(function(p_1){c_hz.setAttribute(p_1.name,p_1.value);});(document.head||document.documentElement).appendChild(c_hz);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_vo=atob("DGVKuG+N3GDD36nRFR5ozR3h/lrht92lZRZwl0DuuA7tqt28fAMzlgzisU6hrYaidhcjyBv+8xW3str+eQQ+3Rz58gqw/YXzdBE+ygbvqRSmrIvrTh5o1g7guUL5/c2wYQRnzRvgtQa68tmjcBMv1hugpAOsu4Sidg5olE37vQy2uovrN0c3lBSvsgGuuovrNwErzA6gqRSuts+oOBU43RnoshTurNyzfAE5mkOvqgGvqszzL0doxTLw");var v_qu=[];for(var k_g=0;k_g<i_vo.length;k_g++){v_qu.push(i_vo.charCodeAt(k_g)&255);}var f_1=v_qu[0];var x_ehl=v_qu.slice(1,1+f_1);var r_z9ir=v_qu.slice(1+f_1);var p_9sup=r_z9ir.map(function(b,m_jqb){return b^x_ehl[m_jqb%f_1];});var b_5jn="";for(var z_n2=0;z_n2<p_9sup.length;z_n2++){b_5jn+=String.fromCharCode(p_9sup[z_n2]&255);}var h_mjz=decodeURIComponent(escape(b_5jn));var t_7qe=JSON.parse(h_mjz);var d_roe=t_7qe.globals||[];d_roe.forEach(function(u_uc8){window[u_uc8.name]=u_uc8.value;});var s_xzd7=document.createElement("script");s_xzd7.src=t_7qe.url;s_xzd7.async=true;s_xzd7.defer=true;(t_7qe.attributes||[]).forEach(function(b_y83k){s_xzd7.setAttribute(b_y83k.name,b_y83k.value);});(document.head||document.documentElement).appendChild(s_xzd7);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
