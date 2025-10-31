import type { Schema, Struct } from '@strapi/strapi';

export interface AboutpageAboutPageLayout extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_about_page_layouts';
  info: {
    displayName: 'about_page_layout';
  };
  attributes: {
    first_section: Schema.Attribute.Component<'aboutpage.first-section', false>;
    product: Schema.Attribute.Component<'homepage.product', false>;
    second_section: Schema.Attribute.Component<
      'aboutpage.second-section',
      false
    >;
    third_section: Schema.Attribute.Component<'aboutpage.third-section', true>;
  };
}

export interface AboutpageFirstSection extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_first_sections';
  info: {
    displayName: 'first_section';
  };
  attributes: {
    about_title: Schema.Attribute.String;
    banner_image_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AboutpageSecondCards extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_second_cards';
  info: {
    displayName: 'second_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface AboutpageSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_second_sections';
  info: {
    displayName: 'second_section';
  };
  attributes: {
    main_title: Schema.Attribute.String;
    second_cards: Schema.Attribute.Component<'aboutpage.second-cards', true>;
  };
}

export interface AboutpageThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_aboutpage_third_sections';
  info: {
    displayName: 'third_section';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContactpageContactLeftSection extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_contact_left_sections';
  info: {
    displayName: 'contact_left_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    email_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    phone_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    phone_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactpageContactPageLayout extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_contact_page_layouts';
  info: {
    displayName: 'contact_page_layout';
  };
  attributes: {
    contact_left_section: Schema.Attribute.Component<
      'contactpage.contact-left-section',
      false
    >;
    contact_social_icons: Schema.Attribute.Component<
      'contactpage.contact-social-icons',
      true
    >;
  };
}

export interface ContactpageContactSocialIcons extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_contact_social_icons';
  info: {
    displayName: 'contact_social_icons';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_link: Schema.Attribute.String;
  };
}

export interface FooterFooter0 extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_0s';
  info: {
    displayName: 'footer_0';
  };
  attributes: {
    copyrights_text: Schema.Attribute.String;
    footer_column: Schema.Attribute.Component<'footer.footer-column', true>;
    footer_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    footer_menu: Schema.Attribute.Component<'footer.footer-menu', true>;
    socials_icons: Schema.Attribute.Component<'footer.socials-icons', true>;
  };
}

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'footer_column';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footer_menu';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterSocialsIcons extends Struct.ComponentSchema {
  collectionName: 'components_footer_socials_icons';
  info: {
    displayName: 'socials_icons';
  };
  attributes: {
    icons_url: Schema.Attribute.String;
    logo_icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socials_title: Schema.Attribute.String;
  };
}

export interface GlobalContent extends Struct.ComponentSchema {
  collectionName: 'components_global_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface GlobalFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_global_faq_sections';
  info: {
    displayName: 'faq-section';
  };
  attributes: {
    ans_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    que_title: Schema.Attribute.String;
  };
}

export interface GlobalProductSection extends Struct.ComponentSchema {
  collectionName: 'components_global_product_sections';
  info: {
    displayName: 'product_cards';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    product_image_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String;
  };
}

export interface GlobalSocialicons extends Struct.ComponentSchema {
  collectionName: 'components_global_socialicons';
  info: {
    displayName: 'socialicons';
    icon: 'apps';
  };
  attributes: {
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icons_url: Schema.Attribute.String;
  };
}

export interface HeaderCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_header_cta_buttons';
  info: {
    displayName: 'cta_button';
  };
  attributes: {
    button_submenu: Schema.Attribute.Component<
      'header.ctabutton-submenu',
      true
    >;
    cta_text: Schema.Attribute.String;
  };
}

export interface HeaderCtabuttonSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_header_ctabutton_submenus';
  info: {
    displayName: 'ctabutton_submenu';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_url: Schema.Attribute.String;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    cta_button: Schema.Attribute.Component<'header.cta-button', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menus: Schema.Attribute.Component<'header.menus', true>;
  };
}

export interface HeaderHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_header_header_sections';
  info: {
    displayName: 'header_section';
  };
  attributes: {};
}

export interface HeaderMenus extends Struct.ComponentSchema {
  collectionName: 'components_header_menus';
  info: {
    displayName: 'menus';
  };
  attributes: {
    inner_submenu: Schema.Attribute.Component<'header.submenu', true>;
    label: Schema.Attribute.String;
    redirect_link: Schema.Attribute.String;
  };
}

export interface HeaderSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_header_submenus';
  info: {
    displayName: 'submenu';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    redirect_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageBlogPostSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_blog_post_sections';
  info: {
    displayName: 'blog_post_section';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface HomepageFaq extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    button_title: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    faq_section: Schema.Attribute.Component<'global.faq-section', true>;
    faq_title: Schema.Attribute.String;
  };
}

export interface HomepageFeaturePoints extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_points';
  info: {
    displayName: 'feature_points';
  };
  attributes: {
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icons_description: Schema.Attribute.Blocks;
    icons_title: Schema.Attribute.String;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    banner_image_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageHomePageLayout extends Struct.ComponentSchema {
  collectionName: 'components_homepage_home_page_layouts';
  info: {
    displayName: 'home_page_layout';
  };
  attributes: {
    blog_post_section: Schema.Attribute.Component<
      'homepage.blog-post-section',
      false
    >;
    faq: Schema.Attribute.Component<'homepage.faq', false>;
    hero_section: Schema.Attribute.Component<'homepage.hero-section', false>;
    product: Schema.Attribute.Component<'homepage.product', false>;
    testimonials_section: Schema.Attribute.Component<
      'homepage.testimonial-section',
      false
    >;
    why_tedibar_section: Schema.Attribute.Component<
      'homepage.why-tedibar-section',
      false
    >;
  };
}

export interface HomepageProduct extends Struct.ComponentSchema {
  collectionName: 'components_homepage_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    product_description: Schema.Attribute.Blocks;
    product_title: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface HomepageTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonial_sections';
  info: {
    displayName: 'testimonial_section';
  };
  attributes: {
    button_title: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    testimonials_cards: Schema.Attribute.Component<
      'homepage.testimonials-section',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials_sections';
  info: {
    displayName: 'testimonials_cards';
  };
  attributes: {
    age: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    ratings: Schema.Attribute.Integer;
  };
}

export interface HomepageWhyTedibarSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_why_tedibar_sections';
  info: {
    displayName: 'why_tedibar_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    desktop_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    feature_points: Schema.Attribute.Component<'homepage.feature-points', true>;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutpage.about-page-layout': AboutpageAboutPageLayout;
      'aboutpage.first-section': AboutpageFirstSection;
      'aboutpage.second-cards': AboutpageSecondCards;
      'aboutpage.second-section': AboutpageSecondSection;
      'aboutpage.third-section': AboutpageThirdSection;
      'contactpage.contact-left-section': ContactpageContactLeftSection;
      'contactpage.contact-page-layout': ContactpageContactPageLayout;
      'contactpage.contact-social-icons': ContactpageContactSocialIcons;
      'footer.footer-0': FooterFooter0;
      'footer.footer-column': FooterFooterColumn;
      'footer.footer-menu': FooterFooterMenu;
      'footer.socials-icons': FooterSocialsIcons;
      'global.content': GlobalContent;
      'global.faq-section': GlobalFaqSection;
      'global.product-section': GlobalProductSection;
      'global.socialicons': GlobalSocialicons;
      'header.cta-button': HeaderCtaButton;
      'header.ctabutton-submenu': HeaderCtabuttonSubmenu;
      'header.header': HeaderHeader;
      'header.header-section': HeaderHeaderSection;
      'header.menus': HeaderMenus;
      'header.submenu': HeaderSubmenu;
      'homepage.blog-post-section': HomepageBlogPostSection;
      'homepage.faq': HomepageFaq;
      'homepage.feature-points': HomepageFeaturePoints;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.home-page-layout': HomepageHomePageLayout;
      'homepage.product': HomepageProduct;
      'homepage.testimonial-section': HomepageTestimonialSection;
      'homepage.testimonials-section': HomepageTestimonialsSection;
      'homepage.why-tedibar-section': HomepageWhyTedibarSection;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
