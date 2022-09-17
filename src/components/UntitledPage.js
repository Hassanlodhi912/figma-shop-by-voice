/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import styles from './UntitledPage.module.scss';

export default function UntitledPage(props) {
  return (
    <div className={`untitled-page ${cn(styles.block, styles.block_layout)}`}>
      <div className={cn(styles.group, styles.group_layout3)}>
        <img
          src={require('assets/43c16362e959e35dcbca3065d748600b.png').default}
          alt=""
          className={cn(styles.decorator, styles.decorator_layout)}
        />

        <div className={cn(styles.group, styles.group_layout2)}>
          <div className={cn(styles.box, styles.box_layout)} />

          <div className={cn(styles.group, styles.group_layout2)}>
            <div
              style={{ '--src': `url(${require('assets/00763cef035530c3c52921e6e2b382e4.png').default})` }}
              className={cn(styles.image1, styles.image1_layout)}
            />

            <div className={cn(styles.group, styles.group_layout2)}>
              <div
                style={{ '--src': `url(${require('assets/24c4f5cdee2fb5ba14e972e4af6389cf.png').default})` }}
                className={cn(styles.block3, styles.block3_layout)}
              />

              <div className={cn(styles.flex, styles.flex_layout)}>
                <div className={cn(styles.group, styles.group_layout1)}>
                  <div
                    style={{ '--src': `url(${require('assets/f2bcd19422a6538ad3c0b26d223a6746.png').default})` }}
                    className={cn(styles.block2, styles.block2_layout)}
                  />

                  <div className={cn(styles.flex1, styles.flex1_layout)}>
                    <div className={cn(styles.group, styles.group_layout)}>
                      <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>{'Back'}</h1>
                      <div
                        style={{ '--src': `url(${require('assets/f2bcd19422a6538ad3c0b26d223a6746.png').default})` }}
                        className={cn(styles.block21, styles.block21_layout)}
                      />
                    </div>

                    <div className={`${styles.flex_spacer}`} />
                    <div className={`${styles.flex_item}`}>
                      <div
                        style={{ '--src': `url(${require('assets/a086ea55f0898a13885ee535a1ba03e2.png').default})` }}
                        className={cn(styles.block1, styles.block1_layout)}>
                        <img
                          src={require('assets/8ece4e91730c7d6fd70c2726cdbdbbf4.png').default}
                          alt=""
                          className={cn(styles.icon1, styles.icon1_layout)}
                        />
                      </div>
                    </div>
                    <div className={`${styles.flex_spacer1}`} />
                    <div className={`${styles.flex_item}`}>
                      <div
                        style={{ '--src': `url(${require('assets/a086ea55f0898a13885ee535a1ba03e2.png').default})` }}
                        className={cn(styles.block1, styles.block1_layout)}>
                        <img
                          src={require('assets/000485f21147bf7f63088eb4926688cc.png').default}
                          alt=""
                          className={cn(styles.icon1, styles.icon1_layout1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className={cn(styles.subtitle_box, styles.subtitle_box_layout)}>
                  <div className={styles.subtitle}>
                    <span className={styles.undefined_span0}>{'"Price: "'}</span>
                    <span className={styles.undefined_span1}>{'"140000"'}</span>
                    <span className={styles.undefined_span2}>{'" RS"'}</span>
                  </div>
                </h3>
                <h3 className={cn(styles.subtitle_box, styles.subtitle_box_layout1)}>
                  <div className={styles.subtitle}>
                    <span className={styles.undefined_span0}>{'"Rating "'}</span>
                    <span className={styles.undefined_span1}>{'"4.5"'}</span>
                  </div>
                </h3>
                <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>
                  {'Super Comfortable Sneaker meant'}
                  <br />
                  {'for walking and runnig Made from'}
                  <br />
                  {'really good quality fabrics and other'}
                  <br />
                  {'refined material.'}
                  <br />{' '}
                </h3>

                <div className={cn(styles.block4, styles.block4_layout)}>
                  <h3 className={cn(styles.subtitle11, styles.subtitle11_layout)}>{'Add To Cart'}</h3>
                </div>

                <div className={cn(styles.block5, styles.block5_layout)}>
                  <div className={cn(styles.flex1, styles.flex1_layout1)}>
                    <div className={`${styles.flex_item1}`}>
                      <img
                        src={require('assets/c3ce4229708b5cfde995a29d9795746f.png').default}
                        alt=""
                        className={cn(styles.image2, styles.image2_layout)}
                      />
                    </div>
                    <div className={`${styles.flex_spacer2}`} />
                    <div className={`${styles.flex_item1}`}>
                      <img
                        src={require('assets/13e087336403e8c870ea4f46e42676a9.png').default}
                        alt=""
                        className={cn(styles.image2, styles.image2_layout)}
                      />
                    </div>
                    <div className={`${styles.flex_spacer2}`} />
                    <div className={`${styles.flex_item1}`}>
                      <img
                        src={require('assets/f2b7bda9267415c6a17bb4ca83d58c69.png').default}
                        alt=""
                        className={cn(styles.image2, styles.image2_layout)}
                      />
                    </div>
                    <div className={`${styles.flex_spacer2}`} />
                    <div className={`${styles.flex_item1}`}>
                      <img
                        src={require('assets/74fa619be9cc9bceaa155aba6dba5f5c.png').default}
                        alt=""
                        className={cn(styles.image2, styles.image2_layout)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UntitledPage.inStorybook = true;
