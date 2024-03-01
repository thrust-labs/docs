import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <svg height="50" viewBox="0 0 608 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="31" y="11" width="574" height="234" rx="77" fill="url(#paint0_linear_414_12809)" stroke="#3E414D" stroke-width="6" />
    <path d="M150.466 246.832C214.222 246.832 265.906 195.258 265.906 131.638C265.906 68.0186 214.222 16.4448 150.466 16.4448C86.7106 16.4448 35.0264 68.0186 35.0264 131.638C35.0264 195.258 86.7106 246.832 150.466 246.832Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M148 171.844C249.133 170.858 296 165.431 296 132.871C296 100.311 259 98.0909 148 92.9109C37 98.0909 0 100.311 0 132.871C0 165.431 46.8667 170.858 148 171.844Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.96 24.6664C211.147 24.6664 259.987 72.5197 259.987 131.473C259.987 190.426 210.9 238.28 150.96 238.28C91.0203 238.28 41.9336 190.426 41.9336 131.473C41.9336 72.5197 90.7736 24.6664 150.96 24.6664ZM150.96 31.573C95.4603 31.573 50.8136 76.2197 50.8136 131.473C50.8136 186.726 95.7069 231.373 150.96 231.373C206.214 231.373 251.107 186.726 251.107 131.473C251.107 76.2197 206.214 31.573 150.96 31.573Z" fill="url(#paint1_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.961 29.3534C207.201 29.3534 252.834 74.9867 252.834 130.98C252.834 186.973 207.201 232.607 150.961 232.607C94.7208 232.607 48.8408 187.22 48.8408 130.98C48.8408 74.74 94.4742 29.3534 150.961 29.3534ZM150.961 31.5734C95.4608 31.5734 50.8142 76.22 50.8142 131.473C50.8142 186.727 95.7075 231.373 150.961 231.373C206.214 231.373 251.107 186.727 251.107 131.473C251.107 76.22 206.214 31.5734 150.961 31.5734Z" fill="#FCD0A9" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.96 24.6664C211.147 24.6664 259.987 72.5197 259.987 131.473C259.987 190.426 210.9 238.28 150.96 238.28C91.0203 238.28 41.9336 190.426 41.9336 131.473C41.9336 72.5197 90.7736 24.6664 150.96 24.6664ZM150.96 31.573C95.4603 31.573 50.8136 76.2197 50.8136 131.473C50.8136 186.726 95.7069 231.373 150.96 231.373C206.214 231.373 251.107 186.726 251.107 131.473C251.107 76.2197 206.214 31.573 150.96 31.573Z" fill="url(#paint2_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.961 28.3668C207.941 28.3668 254.067 74.4935 254.067 131.473C254.067 188.453 207.941 234.58 150.961 234.58C93.9808 234.58 47.6074 188.453 47.6074 131.473C47.6074 74.4935 93.7341 28.3668 150.961 28.3668ZM150.961 29.3535C94.2274 29.3535 48.3474 74.9868 48.3474 131.473C48.3474 187.96 94.2274 233.593 150.714 233.593C207.201 233.593 253.081 187.96 253.081 131.473C253.081 74.9868 207.447 29.3535 150.961 29.3535Z" fill="#FCD0A9" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.96 24.6664C211.147 24.6664 259.987 72.5197 259.987 131.473C259.987 190.426 210.9 238.28 150.96 238.28C91.0203 238.28 41.9336 190.426 41.9336 131.473C41.9336 72.5197 90.7736 24.6664 150.96 24.6664ZM150.96 31.573C95.4603 31.573 50.8136 76.2197 50.8136 131.473C50.8136 186.726 95.7069 231.373 150.96 231.373C206.214 231.373 251.107 186.726 251.107 131.473C251.107 76.2197 206.214 31.573 150.96 31.573Z" fill="url(#paint3_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4136 124.073C43.4136 183.273 91.5136 231.373 150.96 231.373C210.407 231.373 258.507 183.273 258.507 124.073C258.507 118.893 258.014 113.713 257.52 108.78C259.247 116.18 259.987 123.827 259.987 131.72C259.987 190.673 211.147 238.527 150.96 238.527C90.7736 238.527 41.9336 190.427 41.9336 131.473C41.9336 123.58 42.6736 115.933 44.4003 108.533C43.6603 113.713 43.4136 118.647 43.4136 124.073Z" fill="url(#paint4_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.96 24.6664C211.147 24.6664 259.987 72.5197 259.987 131.473C259.987 139.613 259 147.506 257.274 155.153C258.26 149.726 258.507 144.053 258.507 138.38C258.507 79.1797 210.407 31.0797 150.96 31.0797C91.5136 31.0797 43.4136 79.1797 43.4136 138.38C43.4136 144.053 43.9069 149.726 44.6469 155.153C42.9203 147.506 41.9336 139.613 41.9336 131.473C41.9336 72.5197 90.7736 24.6664 150.96 24.6664Z" fill="url(#paint5_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M151.454 166.746C248.147 165.76 293.041 161.073 293.041 131.966C293.041 102.86 257.521 100.886 151.454 96.1997C45.3872 100.886 9.86719 102.86 9.86719 131.966C9.86719 161.073 54.5139 165.76 151.454 166.746Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.7738 99.1602V99.9002C36.5072 106.313 23.9272 116.673 23.9272 131.967C23.9272 146.767 41.1939 159.1 91.0205 164.527V165.267C35.7672 162.06 9.86719 153.92 9.86719 131.967C9.86719 109.273 31.3272 103.107 90.7738 99.1602ZM211.887 99.1602C271.334 103.107 292.794 109.273 292.794 131.967C292.794 154.167 266.894 162.06 211.887 165.267V164.527C261.467 159.1 278.98 146.767 278.98 131.967C278.98 116.673 266.154 106.313 211.887 100.147V99.1602Z" fill="url(#paint6_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.7732 99.4064V100.146C36.5065 106.313 23.9265 116.673 23.9265 131.966C23.9265 146.766 41.1932 159.1 91.0199 164.526V165.02C40.6999 161.813 17.0199 153.673 17.0199 131.966C16.7732 109.766 36.5065 103.353 90.7732 99.4064ZM211.887 99.4064C266.153 103.353 285.887 109.766 285.887 131.966C285.887 153.673 262.206 161.813 211.887 165.02V164.526C261.467 159.1 278.98 146.766 278.98 131.966C278.98 116.673 266.153 106.313 211.887 100.146V99.4064Z" fill="url(#paint7_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.7736 99.4064C36.7536 103.353 17.2669 109.766 17.2669 131.966C17.2669 153.673 40.7003 161.813 90.7736 165.02C40.2069 161.813 16.2803 153.673 16.2803 131.966C16.2803 109.766 36.2603 103.353 90.7736 99.4064ZM211.887 99.4064C266.647 103.353 286.38 109.766 286.38 131.966C286.38 153.673 262.454 161.813 211.887 165.02C261.96 161.813 285.394 153.673 285.394 131.966C285.394 109.766 265.907 103.353 211.887 99.4064Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.486 0L162.326 86.3333C163.56 96.2 170.22 104.587 179.346 108.287L199.08 116.427C184.773 115.687 168.74 114.947 150.486 114.207C132.233 114.947 116.2 115.687 101.893 116.427L121.626 108.287C130.753 104.587 137.166 96.2 138.646 86.3333L150.486 0Z" fill="url(#paint8_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.486 0L162.326 86.3333C163.56 96.2 170.22 104.587 179.346 108.287L199.08 116.427C193.9 116.18 188.72 115.933 183.046 115.687L175.893 112.973C166.026 109.273 159.12 100.147 158.133 89.54L150.486 4.68667L142.84 89.54C141.853 100.147 134.946 109.273 125.08 112.973L118.173 115.687C112.253 115.933 107.073 116.18 101.893 116.427L121.626 108.287C130.753 104.587 137.166 96.2 138.646 86.3333L150.486 0Z" fill="url(#paint9_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.486 73.7531L155.173 101.873C156.16 108.04 161.093 112.726 167.26 113.466L188.966 116.18C183.046 115.933 176.88 115.686 170.22 115.193L160.846 114.206C156.406 113.713 152.953 110.26 152.46 105.82L150.486 83.1264L148.513 105.82C148.02 110.26 144.566 113.713 140.126 114.206L130.753 115.193C124.093 115.44 117.68 115.686 111.76 115.933L133.466 113.22C139.633 112.48 144.566 107.793 145.553 101.626L150.486 73.7531Z" fill="url(#paint10_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.486 83.127L152.46 105.82C152.953 110.26 156.406 113.714 160.846 114.207L170.22 115.194C163.806 114.947 157.146 114.7 150.24 114.207C143.333 114.454 136.673 114.7 130.26 115.194L139.633 114.207C144.073 113.714 147.526 110.26 148.02 105.82L150.486 83.127Z" fill="url(#paint11_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.487 69.0665L156.16 101.38C157.147 107.3 161.833 111.74 167.507 112.727L172.687 113.713L167.507 112.973C161.34 112.233 156.407 107.547 154.927 101.627V101.133L150.487 78.4399L146.293 100.887C145.06 107.3 139.88 112.233 133.467 112.973L126.807 113.713L133.22 112.727C139.14 111.74 143.58 107.3 144.567 101.38L150.487 69.0665Z" fill="url(#paint12_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M152.706 52.2933L158.38 90.5267C159.86 100.147 166.026 108.04 174.906 111.987L181.813 114.947L175.153 112.48C172.193 111.247 169.48 109.767 167.013 107.793C161.833 103.353 158.38 97.1867 157.393 90.0333L152.706 52.2933ZM148.266 52.2933L143.333 90.0333C142.346 96.94 138.893 103.353 133.713 107.793C131.246 109.767 128.533 111.247 125.573 112.48L118.913 114.947L125.82 111.987C134.7 108.04 140.866 100.147 142.346 90.5267L148.266 52.2933Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.487 74.2467L149.5 37.2467L150.487 0L151.473 37.2467L150.487 74.2467Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.486 0L139.879 93.7333L150.486 8.38667L161.093 93.7333L150.486 0Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M244.717 138.905L245.21 139.399C245.21 139.399 245.21 139.399 245.457 139.399C245.457 140.632 224.49 142.605 182.803 145.072C170.963 145.812 161.59 155.432 160.85 167.272C159.123 202.545 155.67 231.899 150.49 255.332C145.31 232.392 142.103 204.025 140.13 169.739L139.883 167.272C139.39 155.432 129.77 145.812 117.93 145.072C76.4901 142.605 55.5234 140.632 55.5234 139.152H55.7701C68.8434 126.572 105.597 121.392 149.01 121.145H150.49C194.15 121.145 231.15 126.325 244.717 138.905Z" fill="url(#paint13_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M244.717 138.905L245.21 139.399C245.21 139.399 245.21 139.399 245.457 139.399C245.457 140.879 222.023 142.359 175.157 143.839C165.043 144.085 157.15 152.472 157.15 162.339C157.15 200.079 154.93 231.159 150.49 255.332C146.297 231.652 144.077 201.559 143.83 164.805V162.339C143.83 152.225 135.937 144.085 125.823 143.839C78.9568 142.112 55.5234 140.632 55.5234 139.152H55.7701C68.8434 126.572 105.597 121.392 149.01 121.145H150.49C194.15 121.145 231.15 126.325 244.717 138.905Z" fill="url(#paint14_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.49 255.825L149.503 128.052H151.477L150.49 255.825Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5234 139.398C57.0034 140.632 80.6834 142.112 126.81 143.345C136.923 143.592 145.063 151.978 144.817 162.338V164.805C144.323 201.558 146.297 231.652 150.49 255.332C154.683 231.158 156.657 200.325 156.163 162.338C155.917 151.978 164.057 143.592 174.17 143.345H175.65C221.283 142.112 244.47 140.632 245.457 139.398C243.977 140.632 220.543 142.112 175.157 143.838C165.043 144.085 157.15 152.472 157.15 162.585C157.15 164.312 157.15 166.038 157.15 167.765V171.465C157.15 184.538 157.15 193.418 156.903 198.105C155.917 220.305 153.45 239.298 150.737 255.578C147.777 239.545 145.557 220.305 144.57 198.105C144.323 193.418 144.323 184.538 144.323 171.465V167.765C144.323 166.532 144.323 165.298 144.323 163.818V162.585C144.323 152.472 136.43 144.332 126.317 143.838C79.9434 142.112 56.5101 140.632 55.5234 139.398Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M150.49 121.145C194.643 121.145 231.89 126.572 245.21 139.152H244.717C230.903 131.259 193.903 128.052 150.49 128.052C107.077 128.052 70.0768 131.505 56.2634 139.152H55.5234C69.0901 126.572 106.337 121.145 150.49 121.145Z" fill="url(#paint15_linear_414_12809)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M151.97 127.065C193.41 127.065 228.93 130.272 243.483 137.672C244.223 138.165 244.717 138.659 245.21 139.152H244.717C231.15 131.505 194.89 128.052 151.97 128.052H150.243C107.077 128.052 70.0768 131.505 56.2634 139.152H55.5234C56.0168 138.659 56.7568 138.165 57.2501 137.672C72.0501 130.272 108.063 127.065 150.243 127.065H151.97Z" fill="#FFECDC" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M245.21 139.152H244.717C244.223 138.905 243.977 138.659 243.483 138.412C228.683 126.819 192.67 121.885 150.49 121.885C108.31 121.885 72.0501 126.819 57.4968 138.412C57.0034 138.905 56.5101 138.905 56.2634 139.152H55.5234C68.8434 126.572 105.597 121.392 149.01 121.145H150.49C194.643 121.145 231.89 126.572 245.21 139.152Z" fill="#FFECDC" />
    <path d="M334.632 151V109.816H319.782V104.8H355.026V109.816H340.176V151H334.632ZM362.279 151V104.8H367.493V123.874H368.417C368.857 122.906 369.517 122.004 370.397 121.168C371.321 120.288 372.487 119.562 373.895 118.99C375.347 118.418 377.173 118.132 379.373 118.132C381.793 118.132 383.949 118.66 385.841 119.716C387.777 120.728 389.317 122.224 390.461 124.204C391.605 126.14 392.177 128.56 392.177 131.464V151H386.963V131.86C386.963 128.648 386.149 126.316 384.521 124.864C382.937 123.412 380.781 122.686 378.053 122.686C374.929 122.686 372.377 123.698 370.397 125.722C368.461 127.746 367.493 130.76 367.493 134.764V151H362.279ZM402.755 151V118.726H407.837V122.686H408.761C409.333 121.278 410.213 120.244 411.401 119.584C412.589 118.924 414.151 118.594 416.087 118.594H419.915V123.346H415.757C413.425 123.346 411.533 124.006 410.081 125.326C408.673 126.602 407.969 128.604 407.969 131.332V151H402.755ZM439.976 151.594C437.644 151.594 435.488 151.088 433.508 150.076C431.572 149.064 430.032 147.568 428.888 145.588C427.788 143.564 427.238 141.122 427.238 138.262V118.726H432.452V137.866C432.452 141.078 433.244 143.41 434.828 144.862C436.456 146.314 438.634 147.04 441.362 147.04C444.442 147.04 446.972 146.028 448.952 144.004C450.932 141.98 451.922 138.966 451.922 134.962V118.726H457.136V151H452.054V145.522H451.13C450.426 147.062 449.216 148.47 447.5 149.746C445.784 150.978 443.276 151.594 439.976 151.594ZM481.048 151.924C477.044 151.924 473.656 151 470.884 149.152C468.156 147.304 466.506 144.378 465.934 140.374L470.884 139.252C471.236 141.364 471.896 143.036 472.864 144.268C473.832 145.456 475.02 146.314 476.428 146.842C477.88 147.326 479.42 147.568 481.048 147.568C483.468 147.568 485.382 147.084 486.79 146.116C488.198 145.148 488.902 143.85 488.902 142.222C488.902 140.55 488.22 139.384 486.856 138.724C485.536 138.02 483.71 137.448 481.378 137.008L478.672 136.546C476.604 136.194 474.712 135.644 472.996 134.896C471.28 134.148 469.916 133.136 468.904 131.86C467.892 130.584 467.386 128.978 467.386 127.042C467.386 124.138 468.508 121.872 470.752 120.244C472.996 118.616 475.966 117.802 479.662 117.802C483.314 117.802 486.262 118.638 488.506 120.31C490.794 121.938 492.268 124.248 492.928 127.24L488.044 128.494C487.648 126.162 486.702 124.534 485.206 123.61C483.71 122.642 481.862 122.158 479.662 122.158C477.462 122.158 475.724 122.576 474.448 123.412C473.172 124.204 472.534 125.392 472.534 126.976C472.534 128.516 473.128 129.66 474.316 130.408C475.548 131.112 477.176 131.64 479.2 131.992L481.906 132.454C484.194 132.85 486.24 133.4 488.044 134.104C489.892 134.764 491.344 135.732 492.4 137.008C493.5 138.284 494.05 139.956 494.05 142.024C494.05 145.192 492.862 147.634 490.486 149.35C488.154 151.066 485.008 151.924 481.048 151.924ZM514.022 151C512.174 151 510.744 150.494 509.732 149.482C508.764 148.47 508.28 147.084 508.28 145.324V123.28H498.578V118.726H508.28V107.242H513.494V118.726H524.054V123.28H513.494V144.532C513.494 145.852 514.132 146.512 515.408 146.512H522.602V151H514.022Z" fill="#F9F9F9" />
    <defs>
      <linearGradient id="paint0_linear_414_12809" x1="318" y1="8" x2="318" y2="248" gradientUnits="userSpaceOnUse">
        <stop stop-color="#292B33" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient id="paint1_linear_414_12809" x1="150.83" y1="24.7059" x2="150.83" y2="238.218" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFECDD" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
      <linearGradient id="paint2_linear_414_12809" x1="150.83" y1="192.484" x2="150.83" y2="93.6704" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" />
        <stop offset="0.1414" />
        <stop offset="0.7705" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint3_linear_414_12809" x1="150.83" y1="192.484" x2="150.83" y2="98.3036" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" />
        <stop offset="0.3293" />
        <stop offset="0.6765" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint4_linear_414_12809" x1="189.23" y1="173.402" x2="111.929" y2="173.402" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" />
        <stop offset="0.5" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint5_linear_414_12809" x1="170.607" y1="89.8971" x2="130.53" y2="89.8971" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" />
        <stop offset="0.4" />
        <stop offset="0.6" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint6_linear_414_12809" x1="151.339" y1="99.197" x2="151.339" y2="165.106" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFECDD" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
      <linearGradient id="paint7_linear_414_12809" x1="151.362" y1="164.983" x2="151.362" y2="99.4621" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFECDD" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
      <linearGradient id="paint8_linear_414_12809" x1="150.436" y1="0.00203086" x2="150.436" y2="115.707" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DD8B42" />
        <stop offset="0.5" stop-color="#E6A56B" />
        <stop offset="1" stop-color="#815229" />
      </linearGradient>
      <linearGradient id="paint9_linear_414_12809" x1="150.436" y1="116.499" x2="150.436" y2="0.00202757" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F0C6A1" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
      <linearGradient id="paint10_linear_414_12809" x1="150.425" y1="73.8169" x2="150.425" y2="115.691" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A96121" />
        <stop offset="1" stop-color="#2E2926" />
      </linearGradient>
      <linearGradient id="paint11_linear_414_12809" x1="150.512" y1="83.1284" x2="150.512" y2="114.897" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9B683A" />
        <stop offset="0.9959" />
      </linearGradient>
      <linearGradient id="paint12_linear_414_12809" x1="149.893" y1="69.159" x2="149.893" y2="113.83" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CD905A" />
        <stop offset="1" stop-color="#FFECDC" />
      </linearGradient>
      <linearGradient id="paint13_linear_414_12809" x1="150.508" y1="121.165" x2="150.508" y2="254.394" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C75E00" />
        <stop offset="0.5" stop-color="#C9976B" />
        <stop offset="1" stop-color="#934A09" />
      </linearGradient>
      <linearGradient id="paint14_linear_414_12809" x1="150.508" y1="121.165" x2="150.508" y2="255.306" gradientUnits="userSpaceOnUse">
        <stop stop-color="#553313" />
        <stop offset="0.2" stop-color="#FCAF6B" />
        <stop offset="0.4" stop-color="#EEBE95" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
      <linearGradient id="paint15_linear_414_12809" x1="55.6541" y1="130.172" x2="245.334" y2="130.172" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DA8031" />
        <stop offset="0.5" stop-color="#FFECDD" />
        <stop offset="1" stop-color="#DA8031" />
      </linearGradient>
    </defs>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/thrust-labs'
  },
  docsRepositoryBase: 'https://github.com/thrust-labs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Thrust Hubs'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.thrust.network/api/og'
        : `https://docs.thrust.network/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#1e1c22" />
        <meta name="theme-color" content="#1e1c22" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful decentralized gaming hubs with Thrust Network."
        />
        <meta
          name="og:description"
          content="Make beautiful decentralized gaming hubs with Thrust Network."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Thrust Network" />
        <link rel="icon" href="https://app.thrust.network/favicon.png" type="image/png" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
    useLink() {
      const config = useConfig()
      return `/docs/feedback`
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <span>Powered by</span>
            <img src="https://api.thrust.network/storage/v1/object/public/thrust/brand/logo-with-text.svg" alt="Thrust Network" style={{ height: 64, width: 153 }} />
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Thrust Labs.
        </p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
