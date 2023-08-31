let helper = {
	geoLocatePuzzle: [
		{
			title: "Australia",
			link: "https://www.google.com/maps/@-25.350684,131.0463223,3a,75y,264.26h,94.34t/data=!3m8!1e1!3m6!1sAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu%3Dw203-h100-k-no-pi-12.154341-ya290.7717-ro-0-fo100!7i10600!8i5300?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332510022!6m8!1m7!1sCAoSLEFGMVFpcE4zNEtxOUROWGF1MmZzRVgycFhETFpmQ0lDbldhUVBrdS03RlF1!2m2!1d-25.35068396746521!2d131.0463222711639!3f264.26!4f4.340000000000003!5f0.7820865974627469",
		},
		{
			title: "Belarus",
			link: "https://www.google.com/maps/place/Muzey+Istorii+Teatral'noy+I+Muzykal'noy+Kul'tury/@53.9054798,27.5601444,3a,90y,49.35h,96.51t/data=!3m6!1e1!3m4!1ss88rdBq5UiYKvp6ojwA7_Q!2e0!7i13312!8i6656!4m17!1m9!3m8!1s0x46da2584e2ad4881:0xa1d181ec8c10!2sBelarus!3b1!8m2!3d53.709807!4d27.953389!10e5!16zL20vMDE2M3Y!3m6!1s0x46dbcfeab3ddf76b:0x4102441cff9e1bc1!8m2!3d53.9051914!4d27.5595092!10e5!16s%2Fg%2F1hc54q1j2?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332520258!6m8!1m7!1ss88rdBq5UiYKvp6ojwA7_Q!2m2!1d53.90547982613528!2d27.56014437433606!3f49.35!4f6.510000000000005!5f0.4000000000000002",
		},
		{
			title: "Belgium",
			link: "https://www.google.com/maps/@51.2180796,4.4150183,3a,75y,286.45h,100.66t/data=!3m6!1e1!3m4!1srkFY-BkTJ0-2z2hWjwMHLg!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332523961!6m8!1m7!1srkFY-BkTJ0-2z2hWjwMHLg!2m2!1d51.21807961391364!2d4.41501826373772!3f286.45!4f10.659999999999997!5f0.7820865974627469",
		},
		{
			title: "Bulgaria",
			link: "https://www.google.com/maps/@42.1494591,24.7477184,3a,90y,296.84h,97.19t/data=!3m7!1e1!3m5!1sncjaflFhux3cCQ9oVdgzTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DncjaflFhux3cCQ9oVdgzTg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D359.54242%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332538942!6m8!1m7!1sncjaflFhux3cCQ9oVdgzTg!2m2!1d42.14945905626361!2d24.74771841789687!3f296.84!4f7.189999999999998!5f0.4000000000000002",
		},
		{
			title: "Cambodia",
			link: "https://www.google.com/maps/@11.5566079,104.9353968,3a,90y,258.58h,101.78t/data=!3m8!1e1!3m6!1sAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub%3Dw203-h100-k-no-pi-0-ya152.46721-ro-0-fo100!7i6080!8i3040?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332542719!6m8!1m7!1sCAoSLEFGMVFpcE16VF9DSnAyVEl1azRPMmtlOWdoVWlvS2ZtN2NjR0J1U0prN3Vi!2m2!1d11.5566079!2d104.9353968!3f258.58!4f11.780000000000001!5f0.4000000000000002",
		},
		{
			title: "Canada",
			link: "https://www.google.com/maps/@60.1872492,-134.6889013,3a,75y,125.82h,79.67t/data=!3m8!1e1!3m6!1sAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl%3Dw203-h100-k-no-pi-0.112540185-ya59.915157-ro-0-fo100!7i13970!8i6985?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332551821!6m8!1m7!1sCAoSLEFGMVFpcE52V1FPc3FXbFhQQmZRamIzblp5dzdCTFdleVdVZ0tyU0E4REls!2m2!1d60.18724916!2d-134.6889013!3f125.82!4f-10.329999999999998!5f0.7820865974627469",
		},
		{
			title: "Chile",
			link: "https://www.google.com/maps/@-42.3318332,-73.3751597,2a,75y,350.28h,110.42t/data=!3m6!1e1!3m4!1sqIYR4B95XigAAAQpm86PUg!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332554989!6m8!1m7!1sqIYR4B95XigAAAQpm86PUg!2m2!1d-42.33183318859179!2d-73.37515973422785!3f350.28!4f20.42!5f0.7820865974627469",
		},
		{
			title: "Colombia",
			link: "https://www.google.com/maps/@4.5985391,-74.0681066,3a,75y,280.78h,87.12t/data=!3m7!1e1!3m5!1sZbG88ECu5M1YVxcm7pp78A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DZbG88ECu5M1YVxcm7pp78A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D343.3648%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332561586!6m8!1m7!1sZbG88ECu5M1YVxcm7pp78A!2m2!1d4.598539130476504!2d-74.06810659286658!3f280.78!4f-2.8799999999999955!5f0.7820865974627469",
		},
		{
			title: "Croatia",
			link: "https://www.google.com/maps/@45.0819259,13.6347638,3a,90y,95.03h,90.52t/data=!3m8!1e1!3m6!1sAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni%3Dw203-h100-k-no-pi-0-ya47.37348-ro-0-fo100!7i7500!8i3750?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332568377!6m8!1m7!1sCAoSLEFGMVFpcE9nMWdmY3YzbVp1bzNjMUVMMzh6RmlCT29zdkg3YS1MdWsydG5p!2m2!1d45.08192591163372!2d13.63476375882529!3f95.03!4f0.519999999999996!5f0.4000000000000002",
		},
		{
			title: "Denmark",
			link: "https://www.google.com/maps/@56.6525516,8.5262593,3a,75y,69.18h,93.33t/data=!3m6!1e1!3m4!1sJo2m04ymc8xFmGFYNH2Tyw!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332575021!6m8!1m7!1sJo2m04ymc8xFmGFYNH2Tyw!2m2!1d56.65255161375055!2d8.52625930536295!3f69.18!4f3.3299999999999983!5f0.7820865974627469",
		},
		{
			title: "Finland",
			link: "https://www.google.com/maps/@60.1378835,24.990532,3a,75y,265.93h,93.25t/data=!3m8!1e1!3m6!1sAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I%3Dw203-h100-k-no-pi-0-ya131.89162-ro-0-fo100!7i12000!8i6000?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332601363!6m8!1m7!1sCAoSK0FGMVFpcE5qdjZmMXNteWJBNGRQMHVSb0l5d19HSWJuUmVWa0FMTlZHM0k.!2m2!1d60.1378835301528!2d24.99053198844194!3f265.93!4f3.25!5f0.7820865974627469",
		},
		{
			title: "Georgia",
			link: "https://www.google.com/maps/@41.673687,44.7001648,3a,90y,273.65h,94.23t/data=!3m8!1e1!3m6!1sAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI%3Dw203-h100-k-no-pi-0-ya181-ro-0-fo100!7i8704!8i4352?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332608703!6m8!1m7!1sCAoSLEFGMVFpcFA3enhDdmxnQzRPU215b2dWT3RUSWNweXdmeE1iMVNFSl91NUFJ!2m2!1d41.673687!2d44.7001648!3f273.65!4f4.230000000000004!5f0.4000000000000002",
		},
		{
			title: "Germany",
			link: "https://www.google.com/maps/@47.737947,7.6892312,3a,75y,226.36h,109.5t/data=!3m8!1e1!3m6!1sAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0%3Dw203-h100-k-no-pi-0-ya324.57867-ro-0-fo100!7i8704!8i4352?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332611797!6m8!1m7!1sCAoSK0FGMVFpcE1QS2F3QURzcVIxcW5vVXV0Y2Nqc0ZxVjU0NThGbzZwTlpRbDA.!2m2!1d47.737947!2d7.689231200000001!3f226.36!4f19.5!5f0.7820865974627469",
		},
		{
			title: "Hungary",
			link: "https://www.google.com/maps/@47.1917777,18.4107785,3a,90y,230.2h,79.11t/data=!3m8!1e1!3m6!1sAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj%3Dw203-h100-k-no-pi-0-ya103.78106-ro-0-fo100!7i9000!8i4500?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332628469!6m8!1m7!1sCAoSLEFGMVFpcFB2LXBDakxiWnJXVjFodTBvUDY5c1RxdmdWOXBUWnFqdFY0OHRq!2m2!1d47.19177768270664!2d18.4107785381816!3f230.2!4f-10.89!5f0.4000000000000002",
		},
		{
			title: "Iceland",
			link: "https://www.google.com/maps/@64.7826033,-21.5608493,3a,75y,65.64h,91.3t/data=!3m8!1e1!3m6!1sAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt%3Dw203-h100-k-no-pi-5.0643086-ya304.05145-ro-0-fo100!7i8704!8i4352?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332631583!6m8!1m7!1sCAoSLEFGMVFpcE8xZjZEMnBjTWsyYTVFb1ZZXzNEWkdreFVjbGllMnZoQ0E2U0V0!2m2!1d64.78260329999999!2d-21.5608493!3f65.64!4f1.2999999999999972!5f0.7820865974627469",
		},
		{
			title: "Indonesia",
			link: "https://www.google.com/maps/@-3.8433943,122.0486517,3a,90y,290.41h,80.33t/data=!3m6!1e1!3m4!1svvtoiual62rn1U6c2NvRnQ!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332634720!6m8!1m7!1svvtoiual62rn1U6c2NvRnQ!2m2!1d-3.843394332539138!2d122.0486517430776!3f290.41!4f-9.670000000000002!5f0.4000000000000002",
		},
		{
			title: "Israel",
			link: "https://www.google.com/maps/@32.056203,34.750012,3a,75y,138.82h,83.17t/data=!3m8!1e1!3m6!1sAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1%3Dw203-h100-k-no-pi-0-ya20.689228-ro-0-fo100!7i12000!8i6000?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332638968!6m8!1m7!1sCAoSLEFGMVFpcE1YV01zRWdla2h1MjhjdFJob1B0eHRWXzNkWGJSakotQURmLXIx!2m2!1d32.056203!2d34.750012!3f138.82!4f-6.829999999999998!5f0.7820865974627469",
		},
		{
			title: "Japan",
			link: "https://www.google.com/maps/@36.9026466,138.1437857,3a,90y,79.75h,70.67t/data=!3m8!1e1!3m6!1sAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx%3Dw203-h100-k-no-pi-0.112540185-ya359.88745-ro-0-fo100!7i8704!8i4352?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332645455!6m8!1m7!1sCAoSLEFGMVFpcE00NGU2QklmbnhCeXVqVHVmSklISmFCN1MtVXV5MjZZUkY1Ykh4!2m2!1d36.9026466!2d138.1437857!3f79.75!4f-19.33!5f0.4000000000000002",
		},
		{
			title: "Kenya",
			link: "https://www.google.com/maps/@-3.9941269,39.6959344,3a,75y,165.56h,89.86t/data=!3m6!1e1!3m4!1s5U9Rh5BRuFrCA5dOBChIJQ!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332651820!6m8!1m7!1s5U9Rh5BRuFrCA5dOBChIJQ!2m2!1d-3.994126918268447!2d39.69593443016079!3f165.56!4f-0.14000000000000057!5f0.7820865974627469",
		},
		{
			title: "Kuwait",
			link: "https://www.google.com/maps/@29.3495474,48.0892503,3a,75y,312.41h,88.53t/data=!3m8!1e1!3m6!1sAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2%3Dw203-h100-k-no-pi-10-ya320-ro-0-fo100!7i8192!8i4096?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332655952!6m8!1m7!1sCAoSLEFGMVFpcFBmZ2tISkstejJkVW5Yd3Z0ck9RQVcwT3JLYUNDYU54OG8xWVEy!2m2!1d29.3495474!2d48.0892503!3f312.41!4f-1.4699999999999989!5f0.7820865974627469",
		},
		{
			title: "Liberia",
			link: "https://www.google.com/maps/@6.3172542,-10.8066699,3a,90y,50.26h,96.11t/data=!3m7!1e1!3m5!1sAF1QipOPpDjxiVsIlqxYoQ_CrtotKJkhfbZOfbyJStR9!2e10!3e11!7i7680!8i3840?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332662148!6m8!1m7!1sCAoSLEFGMVFpcE9QcERqeGlWc0lscXhZb1FfQ3J0b3RLSmtoZmJaT2ZieUpTdFI5!2m2!1d6.317254223164158!2d-10.80666989120235!3f50.26!4f6.109999999999999!5f0.4000000000000002",
		},
		{
			title: "Madagascar",
			link: "https://www.google.com/maps/@-18.9234437,47.5319465,2a,75y,72.19h,100.77t/data=!3m7!1e1!3m5!1sYohII4q3A6QYAaDyJI_-KQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DYohII4q3A6QYAaDyJI_-KQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D279.88742%26pitch%3D-20.11257%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332669517!6m8!1m7!1sYohII4q3A6QYAaDyJI_-KQ!2m2!1d-18.92344366752726!2d47.53194652035273!3f72.19!4f10.769999999999996!5f0.7820865974627469",
		},
		{
			title: "Nepal",
			link: "https://www.google.com/maps/@28.7616414,83.6368122,3a,90y,147.07h,91.39t/data=!3m8!1e1!3m6!1sAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U%3Dw203-h100-k-no-pi-0-ya56.000004-ro-0-fo100!7i10240!8i5120?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332693221!6m8!1m7!1sCAoSLEFGMVFpcE5WMUdheVJhcnJKUjNWSWdfRlFVRlZOSS1kMGItbnJ3aGhwS19V!2m2!1d28.76164139999999!2d83.6368122!3f147.07!4f1.3900000000000006!5f0.4000000000000002",
		},
		{
			title: "New Zealand",
			link: "https://www.google.com/maps/@-37.8717785,175.6828837,3a,75y,142h,87.82t/data=!3m6!1e1!3m4!1sZafOzmzIQnx7u7CnD0dMkg!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332696468!6m8!1m7!1sZafOzmzIQnx7u7CnD0dMkg!2m2!1d-37.87177853802388!2d175.682883726137!3f142!4f-2.180000000000007!5f0.7820865974627469",
		},
		{
			title: "Norway",
			link: "https://www.google.com/maps/@58.721475,9.235935,3a,75y,184.68h,81.84t/data=!3m6!1e1!3m4!1sflanBzb_7quSGyG9vP9DmA!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332700135!6m8!1m7!1sflanBzb_7quSGyG9vP9DmA!2m2!1d58.72147503485372!2d9.235934985588043!3f184.68!4f-8.159999999999997!5f0.7820865974627469",
		},
		{
			title: "Peru",
			link: "https://www.google.com/maps/@-13.3299509,-72.1971049,3a,90y,136.39h,84.52t/data=!3m8!1e1!3m6!1sAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL%3Dw203-h100-k-no-pi0-ya1.3773088-ro-0-fo100!7i6656!8i3328?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332707150!6m8!1m7!1sCAoSLEFGMVFpcE5HNjJRN3BLWHc0LXdYNHhibGhSWVhqY05wOHRUOXl0djJhMHdM!2m2!1d-13.3299509!2d-72.1971049!3f136.39!4f-5.480000000000004!5f0.4000000000000002",
		},
		{
			title: "Philippines",
			link: "https://www.google.com/maps/@14.6296075,121.0964071,3a,90y,152.33h,94.9t/data=!3m6!1e1!3m4!1shDbmXwkTQv1NYH36K6Vr2A!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332710402!6m8!1m7!1shDbmXwkTQv1NYH36K6Vr2A!2m2!1d14.62960745037837!2d121.0964071307574!3f152.33!4f4.900000000000006!5f0.4000000000000002",
		},
		{
			title: "Portugal",
			link: "https://www.google.com/maps/@38.709765,-9.1335375,3a,90y,46.68h,103.28t/data=!3m7!1e1!3m5!1sSZ1ENOyWibCarEvBdMM_lg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSZ1ENOyWibCarEvBdMM_lg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D66.14479%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332713772!6m8!1m7!1sSZ1ENOyWibCarEvBdMM_lg!2m2!1d38.70976500817227!2d-9.133537484566608!3f46.68!4f13.280000000000001!5f0.4000000000000002",
		},
		{
			title: "Romania",
			link: "https://www.google.com/maps/@44.4268929,26.1029659,3a,90y,242.94h,79.39t/data=!3m7!1e1!3m5!1sV8CqZprZitaQJynaUAjEAw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DV8CqZprZitaQJynaUAjEAw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D232.60112%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332719970!6m8!1m7!1sV8CqZprZitaQJynaUAjEAw!2m2!1d44.42689291919224!2d26.10296593559447!3f242.94!4f-10.61!5f0.4000000000000002",
		},
		{
			title: "Russia",
			link: "https://www.google.com/maps/@55.7317335,37.50607,3a,90y,268.32h,109.04t/data=!3m8!1e1!3m6!1sAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS%3Dw203-h100-k-no-pi-7.990353-ya159.14302-ro0-fo100!7i6000!8i3000?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332723639!6m8!1m7!1sCAoSLEFGMVFpcFBGMG5rYjFCcGhYNm5ObENGQmJHUEdHUXBWMmUwYjBSMXFBUEFT!2m2!1d55.73173347549965!2d37.50606995075941!3f268.32!4f19.040000000000006!5f0.4000000000000002",
		},
		{
			title: "Slovenia",
			link: "https://www.google.com/maps/@46.5602916,15.6494557,3a,90y,120.87h,108.58t/data=!3m6!1e1!3m4!1ssNFPSsrlsNTIDAcHLasCIw!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332731147!6m8!1m7!1ssNFPSsrlsNTIDAcHLasCIw!2m2!1d46.56029155259352!2d15.64945569779819!3f120.87!4f18.58!5f0.4000000000000002",
		},
		{
			title: "Venezuela",
			link: "https://www.google.com/maps/@10.5132439,-66.9125697,3a,90y,172.89h,96.27t/data=!3m6!1e1!3m4!1sAF1QipMbqPPfLC_S0tN8EfzjYT7E1MZx__mHgL_4g4XM!2e10!7i8000!8i4000?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1686332761420!6m8!1m7!1sCAoSLEFGMVFpcE1icVBQZkxDX1MwdE44RWZ6allUN0UxTVp4X19tSGdMXzRnNFhN!2m2!1d10.5132439351186!2d-66.9125697389245!3f172.89!4f6.269999999999996!5f0.4000000000000002",
		},
		{
			title: "Albania",
			link: "https://www.google.com/maps/@41.7848555,19.6466145,3a,75y,349.04h,83.42t/data=!3m8!1e1!3m6!1sAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1%3Dw203-h100-k-no-pi-0-ya291.11536-ro0-fo100!7i12000!8i6000?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119136328!6m8!1m7!1sCAoSLEFGMVFpcE5pblZqV09hZDNSeGI3WE5CdFYtUnVvc2dud1lhSTI0YlZRZ24x!2m2!1d41.784855531691!2d19.646614490124!3f349.04!4f-6.579999999999998!5f0.7820865974627469",
		},
		{
			title: "Belgium",
			link: "https://www.google.com/maps/@51.2089881,2.8846616,3a,75y,77.68h,86.15t/data=!3m7!1e1!3m5!1sjT026m8Nhnp7aQIXqudXeQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DjT026m8Nhnp7aQIXqudXeQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D335.1454%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119150490!6m8!1m7!1sjT026m8Nhnp7aQIXqudXeQ!2m2!1d51.20898806548806!2d2.884661580230813!3f77.68!4f-3.8499999999999943!5f0.7820865974627469",
		},
		{
			title: "Botswana",
			link: "https://www.google.com/maps/@-20.5000325,25.1290002,3a,75y,252.33h,85.04t/data=!3m8!1e1!3m6!1sAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq%3Dw203-h100-k-no-pi-0.37066647-ya234.55408-ro-0.0015957364-fo100!7i8192!8i4096?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119154762!6m8!1m7!1sCAoSLEFGMVFpcE1EdWM1ZjFkc0NBekw5Q3E0RVNUV1dqSkNSbWl6dFF5ZEo0X2Nx!2m2!1d-20.5000325!2d25.1290002!3f252.33!4f-4.959999999999994!5f0.7820865974627469",
		},
		{
			title: "Colombia",
			link: "https://www.google.com/maps/@3.8597977,-76.5402389,3a,89.6y,268.63h,93.31t/data=!3m7!1e1!3m5!1s0owHJBDb2iocP6zfIwfe4w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0owHJBDb2iocP6zfIwfe4w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D321.72473%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119182731!6m8!1m7!1s0owHJBDb2iocP6zfIwfe4w!2m2!1d3.859797749837747!2d-76.5402388588541!3f268.63!4f3.3100000000000023!5f0.41007199324273763",
		},
		{
			title: "Croatia",
			link: "https://www.google.com/maps/@45.0818662,13.6344663,3a,75y,28.73h,90.79t/data=!3m8!1e1!3m6!1sAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q%3Dw203-h100-k-no-pi1.7888254-ya287.53204-ro-0.705416-fo100!7i7680!8i3840?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119196042!6m8!1m7!1sCAoSLEFGMVFpcE54dTVLYzZ4eGR1bnIxeFcwU3EtbUtDRGI5Mjd0by1zd0RTYjRx!2m2!1d45.08186619968883!2d13.63446634306079!3f28.73!4f0.7900000000000063!5f0.7820865974627469",
		},
		{
			title: "El Salvador",
			link: "https://www.google.com/maps/@13.7090322,-89.2134698,3a,75y,62.38h,80.54t/data=!3m8!1e1!3m6!1sAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI%3Dw203-h100-k-no-pi-2.920129-ya157.55408-ro1.6578418-fo100!7i8192!8i4096?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119216166!6m8!1m7!1sCAoSLEFGMVFpcFBwX09SbnFwWnpXQXMzcFB0eVl5Rk1Vb3R3NWVMd1hZcVY5RmhJ!2m2!1d13.70903218817429!2d-89.21346977598941!3f62.38!4f-9.459999999999994!5f0.7820865974627469",
		},
		{
			title: "Germany",
			link: "https://www.google.com/maps/@47.9951764,7.8529328,3a,74.5y,326.02h,114.9t/data=!3m8!1e1!3m6!1sAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH%3Dw203-h100-k-no-pi-17.10611-ya346.90536-ro-0-fo100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119232778!6m8!1m7!1sCAoSLEFGMVFpcE03bC02VThaN3c1N19uQ2VxYmxsaDFoU2haMVRiN0thdE1IMU9I!2m2!1d47.99517639017938!2d7.852932849698391!3f326.02!4f24.900000000000006!5f0.7951360383703611",
		},
		{
			title: "Ghana",
			link: "https://www.google.com/maps/@6.6957825,-1.6165838,3a,90y,257.8h,81.84t/data=!3m7!1e1!3m5!1ss2jaeN-KjhsrQLbcMiGrpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Ds2jaeN-KjhsrQLbcMiGrpQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D326.98788%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119235842!6m8!1m7!1ss2jaeN-KjhsrQLbcMiGrpQ!2m2!1d6.695782542655994!2d-1.616583768625464!3f257.8!4f-8.159999999999997!5f0.4000000000000002",
		},
		{
			title: "India",
			link: "https://www.google.com/maps/@26.923828,75.8270749,3a,75y,285.54h,105.75t/data=!3m6!1e1!3m4!1s1Axyv3l_iqt9yWzC4gIdqg!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119247070!6m8!1m7!1s1Axyv3l_iqt9yWzC4gIdqg!2m2!1d26.9238280486489!2d75.82707492149625!3f285.54!4f15.75!5f0.7820865974627469",
		},
		{
			title: "Indonesia",
			link: "https://www.google.com/maps/@-3.0825232,119.9169088,3a,75y,228.56h,98.57t/data=!3m6!1e1!3m4!1s26jryH9JuOBs4IO9Y1QmOw!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119250014!6m8!1m7!1s26jryH9JuOBs4IO9Y1QmOw!2m2!1d-3.082523173064316!2d119.9169088254661!3f228.56!4f8.569999999999993!5f0.7820865974627469",
		},
		{
			title: "Iran",
			link: "https://www.google.com/maps/@30.4325525,56.057296,3a,75y,151.04h,95.09t/data=!3m8!1e1!3m6!1sAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW%3Dw203-h100-k-no-pi-10-ya189.07047-ro-0-fo100!7i5940!8i2970?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119253733!6m8!1m7!1sCAoSLEFGMVFpcE8zSkxUdEhDSzYySVhzN0phX0VmeEQ5d2xVX0dlOGpQUEtNQ1pX!2m2!1d30.43255247853044!2d56.05729599476224!3f151.04!4f5.090000000000003!5f0.7820865974627469",
		},
		{
			title: "Italy",
			link: "https://www.google.com/maps/@41.8982242,12.4731588,3a,90y,175.69h,83.45t/data=!3m8!1e1!3m6!1sAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L%3Dw203-h100-k-no-pi-0-ya248.70602-ro-0-fo100!7i6528!8i3264?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119265815!6m8!1m7!1sCAoSLEFGMVFpcFBhTnVyMlIzZkpXek01WENEbEVQSzdpOUNRN2FzSU1nampKTzZM!2m2!1d41.898224225052!2d12.47315876255!3f175.69!4f-6.549999999999997!5f0.4000000000000002",
		},
		{
			title: "Japan",
			link: "https://www.google.com/maps/@36.7326326,138.4621769,2a,75y,132.59h,75.21t/data=!3m7!1e1!3m5!1s-_0l0tU3lKz0JtaEsqJk7w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-_0l0tU3lKz0JtaEsqJk7w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D294.00262%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119273227!6m8!1m7!1s-_0l0tU3lKz0JtaEsqJk7w!2m2!1d36.732632613848!2d138.4621769294279!3f132.59!4f-14.790000000000006!5f0.7820865974627469",
		},
		{
			title: "Jordan",
			link: "https://www.google.com/maps/@31.9516112,35.9393884,2a,75y,308.12h,83.76t/data=!3m7!1e1!3m5!1siUBbBTb3yDoFEFhUe4GnCg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DiUBbBTb3yDoFEFhUe4GnCg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D126.0864%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119276293!6m8!1m7!1siUBbBTb3yDoFEFhUe4GnCg!2m2!1d31.95161115368211!2d35.93938839552868!3f308.12!4f-6.239999999999995!5f0.7820865974627469",
		},
		{
			title: "Kenya",
			link: "https://www.google.com/maps/@-1.2839794,36.8208278,3a,90y,336.57h,88.24t/data=!3m6!1e1!3m4!1sGwPdUdRZdv9AXcFndU_EOQ!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119279399!6m8!1m7!1sGwPdUdRZdv9AXcFndU_EOQ!2m2!1d-1.283979405927672!2d36.82082780827069!3f336.57!4f-1.7600000000000051!5f0.4000000000000002",
		},
		{
			title: "Latvia",
			link: "https://www.google.com/maps/@56.9474378,24.1063499,3a,90y,91.94h,96.81t/data=!3m6!1e1!3m4!1s-36m3Um4REUCCCjuzfjYaA!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119286097!6m8!1m7!1s-36m3Um4REUCCCjuzfjYaA!2m2!1d56.9474378136615!2d24.10634993779821!3f91.94!4f6.810000000000002!5f0.4000000000000002",
		},
		{
			title: "Lithuania",
			link: "https://www.google.com/maps/@55.798336,21.0670862,3a,75y,334.07h,87.38t/data=!3m8!1e1!3m6!1sAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII%3Dw203-h100-k-no-pi-0-ya9.096276-ro-0-fo100!7i9204!8i4602?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119299805!6m8!1m7!1sCAoSLEFGMVFpcE5TRGRCUVJneGZzWi03dlZJYlhoN092amlabGRzY2pYanV4c0lJ!2m2!1d55.79833599951167!2d21.06708616018295!3f334.07!4f-2.6200000000000045!5f0.7820865974627469",
		},
		{
			title: "Malaysia",
			link: "https://www.google.com/maps/@3.2375917,101.684043,3a,90y,7.13h,116.58t/data=!3m8!1e1!3m6!1sAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd%3Dw203-h100-k-no-pi-0-ya290.8275-ro0-fo100!7i8704!8i4352?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119309719!6m8!1m7!1sCAoSLEFGMVFpcE5DdGZnZGFGSlJ4aTNDNFlQTG9CUGR3cDNiYThnWVBHX1VIb0hk!2m2!1d3.2375917!2d101.684043!3f7.13!4f26.58!5f0.4000000000000002",
		},
		{
			title: "Netherlands",
			link: "https://www.google.com/maps/@52.113111,4.2802872,3a,90y,199.78h,96.26t/data=!3m6!1e1!3m4!1sj1uAVlzaTU4GQyduJYzjuA!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119343452!6m8!1m7!1sj1uAVlzaTU4GQyduJYzjuA!2m2!1d52.11311104606541!2d4.28028724851124!3f199.78!4f6.260000000000005!5f0.4000000000000002",
		},
		{
			title: "New Zealand",
			link: "https://www.google.com/maps/@-39.5010522,176.9184996,3a,90y,68.64h,88.81t/data=!3m6!1e1!3m4!1sJCSiYBxjbDe_EPTZw_7gDQ!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119346564!6m8!1m7!1sJCSiYBxjbDe_EPTZw_7gDQ!2m2!1d-39.5010521533879!2d176.918499552169!3f68.64!4f-1.1899999999999977!5f0.4000000000000002",
		},
		{
			title: "Nigeria",
			link: "https://www.google.com/maps/@9.0809615,7.5243988,2a,90y,84.34h,85.05t/data=!3m6!1e1!3m4!1sINHBz4HdSwMAAAQrBnftjg!2e0!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119352692!6m8!1m7!1sINHBz4HdSwMAAAQrBnftjg!2m2!1d9.080961517214682!2d7.524398838108427!3f84.34!4f-4.950000000000003!5f0.4000000000000002",
		},
		{
			title: "Poland",
			link: "https://www.google.com/maps/@52.2494052,20.9923145,3a,90y,99.76h,104.25t/data=!3m6!1e1!3m4!1seXEScTe7gqoljTOV4M_1PA!2e0!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119378940!6m8!1m7!1seXEScTe7gqoljTOV4M_1PA!2m2!1d52.24940517758763!2d20.99231454742342!3f99.76!4f14.25!5f0.4000000000000002",
		},
		{
			title: "Singapore",
			link: "https://www.google.com/maps/@1.2806527,103.8642833,2a,90y,41.99h,89.35t/data=!3m7!1e1!3m5!1sb7tYegC8sOpQiSgx9CjtNA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Db7tYegC8sOpQiSgx9CjtNA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D84.62819%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119382058!6m8!1m7!1sb7tYegC8sOpQiSgx9CjtNA!2m2!1d1.280652667541553!2d103.8642833171509!3f41.99!4f-0.6500000000000057!5f0.4000000000000002",
		},
		{
			title: "Spain",
			link: "https://www.google.com/maps/@37.1760783,-3.5881413,3a,90y,12.6h,91.86t/data=!3m8!1e1!3m6!1sAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7%3Dw203-h100-k-no-pi-0-ya139.54929-ro0-fo100!7i6144!8i3072?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119386122!6m8!1m7!1sCAoSLEFGMVFpcFA5cUFEM3NzZW5XT0R3cUZMSVQ2VmJ3QUQ0RnpsWGdLYmdtaHQ3!2m2!1d37.1760783!2d-3.5881413!3f12.6!4f1.8599999999999994!5f0.4000000000000002",
		},
		{
			title: "Sweden",
			link: "https://www.google.com/maps/@65.8055012,21.678883,3a,90y,202.99h,90.85t/data=!3m7!1e1!3m5!1sO7gt2w-yxeZI97e82gkunQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DO7gt2w-yxeZI97e82gkunQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D194.25218%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
			embed:
				"https://www.google.com/maps/embed?pb=!4v1687119389195!6m8!1m7!1sO7gt2w-yxeZI97e82gkunQ!2m2!1d65.80550118091678!2d21.67888296764118!3f202.99!4f0.8499999999999943!5f0.4000000000000002",
		},
	],
	chessPuzzle: [
		"Nf6+",
		"Qd5+",
		"Qb8+",
		"Qd8+",
		"Qxg6+",
		"Qxd7+",
		"Qxf8+",
		"Qd7+",
		"Qg6+",
		"Qxh6+",
		"Qg4+",
		"Qxh6+",
		"Qg6+",
		"Rg1+",
		"Qxh5+",
		"Ne7",
		"Qc3+",
		"Qf5+",
		"Bf6+",
		"Qc8+",
		"Re8+",
		"Rc1+",
		"Bf4+",
		"Ne6+",
		"Qf8+",
		"Bf5+",
		"Qxc6+",
		"Qxb8+",
		"Qxd6+",
		"Rd8+",
		"Nd3+",
		"Rxb6+",
		"Qxf7+",
		"Nf6+",
		"Qe7+",
		"Rg8+",
		"Qxf7+",
		"Be3+",
		"Nh4+",
		"Qxe6+",
		"Qf8+",
		"Qf6+",
		"Nb5+",
		"Qxh7+",
		"Qxb7+",
		"Qg1+",
		"Bh6+",
		"Rxf6+",
		"Qxh6+",
		"h5+",
		"Nxd7+",
		"Rxh2+",
		"Bb5+",
		"Rg8+",
		"Qh8+",
		"Bh5+",
		"Qh7+",
		"Qxh7+",
		"Ne5+",
		"Qxg7+",
		"Rh8+",
		"Rxh6+",
		"Qxe8+",
		"Rxe8+",
		"Qxh6+",
		"Qxh7+",
		"Kh6",
		"Be1+",
		"Rxg7+",
		"Qxg7+",
		"Rg7",
		"Bd6+",
		"Ng6+",
		"Qh3+",
		"Rg1+",
		"Qg1+",
		"Rh8+",
		"Rf6",
		"Re7+",
		"Qh6+",
		"Qxh7+",
		"Rf6+",
		"Qf7+",
		"Bb6+",
		"Rxg6+",
		"Qh8+",
		"Rxh3+",
		"Rxh7+",
		"Nf5+",
		"Rxf7+",
		"Rf7+",
		"f5+",
		"Rh8+",
		"Qxf2+",
		"Qxf8+",
		"Re8+",
		"Rxf6+",
		"Qh3+",
		"Nf3",
		"Qxe6+",
		"Rg8+",
		"Qe8+",
		"Rxf5+",
		"Qxh2+",
		"Rxf8+",
		"Rxg6+",
		"Bf2+",
		"Qxc3+",
		"Nd4+",
		"Qxh3+",
		"Nf4+",
		"Qg2+",
		"Qxh7+",
		"Qh2+",
		"Qh1+",
		"Qxh3+",
		"Rxg7+",
		"Qd8+",
		"Rd8+",
		"Rd8+",
		"Nd5+",
		"Rc8+",
		"g5+",
		"Rh4+",
		"Ng6+",
		"Qxe6+",
		"Bf7+",
		"Ne7+",
		"Nh8+",
		"Rxf1+",
		"Bxg6+",
		"Nxf7+",
		"Re5+",
		"Rf8+",
		"Rxe6+",
		"Rxh7+",
		"Nxb7+",
		"Qg8+",
		"Qxh6+",
		"Ra1+",
		"Rh8+",
		"Bg6+",
		"Qd8+",
		"Qh5+",
		"Qxg6+",
		"Qxa3+",
		"Bg6+",
		"Nf4+",
		"Qxc3+",
		"Ne6+",
		"Nxf7+",
		"Rxd8+",
		"Ng3+",
		"Re8+",
		"Bxf3+",
		"Rh2+",
		"Re8+",
		"Bh6",
		"Qb5+",
		"Qh6+",
		"Rxh7+",
		"Rxf7+",
		"Rxf8+",
		"Rh6",
		"Bf5+",
		"Rxh6+",
		"Qe6+",
		"Rxa7+",
		"Rg2+",
		"Qg4+",
		"Qh1+",
		"g4+",
		"Qc6+",
		"Rg8+",
		"Bf6+",
		"Qc6",
		"f2+",
		"Ne2+",
		"Rh6+",
		"Rc1+",
		"Ne4+",
		"Ng4",
		"Rf7+",
		"Qd8+",
		"Rxh6+",
		"Qg7+",
		"Be5+",
		"Rxh6+",
		"Re4+",
		"Nf7+",
		"Rxh6+",
		"Rf1+",
		"Rg8+",
	],
	periodicTable: {
		H: 1,
		He: 2,
		Li: 3,
		Be: 4,
		B: 5,
		C: 6,
		N: 7,
		O: 8,
		F: 9,
		Ne: 10,
		Na: 11,
		Mg: 12,
		Al: 13,
		Si: 14,
		P: 15,
		S: 16,
		Cl: 17,
		Ar: 18,
		K: 19,
		Ca: 20,
		Sc: 21,
		Ti: 22,
		V: 23,
		Cr: 24,
		Mn: 25,
		Fe: 26,
		Co: 27,
		Ni: 28,
		Cu: 29,
		Zn: 30,
		Ga: 31,
		Ge: 32,
		As: 33,
		Se: 34,
		Br: 35,
		Kr: 36,
		Rb: 37,
		Sr: 38,
		Y: 39,
		Zr: 40,
		Nb: 41,
		Mo: 42,
		Tc: 43,
		Ru: 44,
		Rh: 45,
		Pd: 46,
		Ag: 47,
		Cd: 48,
		In: 49,
		Sn: 50,
		Sb: 51,
		Te: 52,
		I: 53,
		Xe: 54,
		Cs: 55,
		Ba: 56,
		La: 57,
		Ce: 58,
		Pr: 59,
		Nd: 60,
		Pm: 61,
		Sm: 62,
		Eu: 63,
		Gd: 64,
		Tb: 65,
		Dy: 66,
		Ho: 67,
		Er: 68,
		Tm: 69,
		Yb: 70,
		Lu: 71,
		Hf: 72,
		Ta: 73,
		W: 74,
		Re: 75,
		Os: 76,
		Ir: 77,
		Pt: 78,
		Au: 79,
		Hg: 80,
		Tl: 81,
		Pb: 82,
		Bi: 83,
		Po: 84,
		At: 85,
		Rn: 86,
		Fr: 87,
		Ra: 88,
		Ac: 89,
		Th: 90,
		Pa: 91,
		U: 92,
		Np: 93,
		Pu: 94,
		Am: 95,
		Cm: 96,
		Bk: 97,
		Cf: 98,
		Es: 99,
		Fm: 100,
		Md: 101,
		No: 102,
		Lr: 103,
		Rf: 104,
		Db: 105,
		Sg: 106,
		Bh: 107,
		Hs: 108,
		Mt: 109,
		Ds: 110,
		Rg: 111,
		Cn: 112,
		Nh: 113,
		Fl: 114,
		Mc: 115,
		Lv: 116,
		Ts: 117,
		Og: 118,
	},
	periodicTableKeys: [
		"H",
		"He",
		"Li",
		"Be",
		"B",
		"C",
		"N",
		"O",
		"F",
		"Ne",
		"Na",
		"Mg",
		"Al",
		"Si",
		"P",
		"S",
		"Cl",
		"Ar",
		"K",
		"Ca",
		"Sc",
		"Ti",
		"V",
		"Cr",
		"Mn",
		"Fe",
		"Co",
		"Ni",
		"Cu",
		"Zn",
		"Ga",
		"Ge",
		"As",
		"Se",
		"Br",
		"Kr",
		"Rb",
		"Sr",
		"Y",
		"Zr",
		"Nb",
		"Mo",
		"Tc",
		"Ru",
		"Rh",
		"Pd",
		"Ag",
		"Cd",
		"In",
		"Sn",
		"Sb",
		"Te",
		"I",
		"Xe",
		"Cs",
		"Ba",
		"La",
		"Ce",
		"Pr",
		"Nd",
		"Pm",
		"Sm",
		"Eu",
		"Gd",
		"Tb",
		"Dy",
		"Ho",
		"Er",
		"Tm",
		"Yb",
		"Lu",
		"Hf",
		"Ta",
		"W",
		"Re",
		"Os",
		"Ir",
		"Pt",
		"Au",
		"Hg",
		"Tl",
		"Pb",
		"Bi",
		"Po",
		"At",
		"Rn",
		"Fr",
		"Ra",
		"Ac",
		"Th",
		"Pa",
		"U",
		"Np",
		"Pu",
		"Am",
		"Cm",
		"Bk",
		"Cf",
		"Es",
		"Fm",
		"Md",
		"No",
		"Lr",
		"Rf",
		"Db",
		"Sg",
		"Bh",
		"Hs",
		"Mt",
		"Ds",
		"Rg",
		"Cn",
		"Nh",
		"Fl",
		"Mc",
		"Lv",
		"Ts",
		"Og",
	],
	ytLinks: {
		"3:00": "4iORuByyRmAOgHe",
		"3:01": "y2frxNQgsOQSgBa",
		"3:02": "y2frxNQgsOQSgBa",
		"3:03": "wtqzSTi4zQQOgSc",
		"3:04": "wtqzSTi4zQQOgSc",
		"3:05": "J2I2vQQwiyEHsS",
		"3:06": "xwuyBTTuUrQHg",
		"3:07": "tPSBj4QuuwkHsAs",
		"3:08": "HPlBcPvJQewHsAs",
		"3:09": "vqlcBxgYnFoHsS",
		"3:10": "vqlcBxgYnFoHsS",
		"3:11": "Zx_iiQAH-TwFlSm",
		"3:12": "uawO3-tjP1cBhAg",
		"3:13": "uawO3-tjP1cBhAg",
		"3:14": "xepkylNIenwTs",
		"3:15": "xepkylNIenwTs",
		"3:16": "krqmxbffbTEFlEu",
		"3:17": "t-3-guBJswYTsS",
		"3:18": "t-3-guBJswYTsS",
		"3:19": "ZSv1iiT3jlcOgTc",
		"3:20": "HduubRTdko4FlSm",
		"3:21": "yRQ1QZs7Q0wFlEu",
		"3:22": "AedxizpHQ4AFlSm",
		"3:23": "J_QEigiJcsQFlEu",
		"3:24": "J_QEigiJcsQFlEu",
		"3:25": "yFfcsmK2TOAHsAs",
		"3:26": "z2bqfIdTtwEHsS",
		"3:27": "z2bqfIdTtwEHsS",
		"3:28": "tk2O_dPRSqwTsSc",
		"3:29": "u-oIZfasENgTs",
		"3:30": "u-oIZfasENgTs",
		"3:31": "cdnOG2TQwHATsSb",
		"3:32": "ahBmRREpqiIOgH",
		"3:33": "ahBmRREpqiIOgH",
		"3:34": "KEFs4o-uGEAOgGa",
		"3:35": "Q-GEwZGu_OAOgSb",
		"3:36": "Q-GEwZGu_OAOgSb",
		"3:37": "lZwt3xbuEJQFlEu",
		"3:38": "bm-ummtKNOwTsFe",
		"3:39": "itBuZqROGocTsAg",
		"3:40": "y_fzxkP1YscOgB",
		"3:41": "ygHP_BmszQ_qzOgSe",
		"3:42": "ygHP_BmszQ_qzOgSe",
		"3:43": "e1cpwxneseQFlEu",
		"3:44": "ompeR1pJlaQFlEu",
		"3:45": "rbREmmg1wRcFlEu",
		"3:46": "aTwhiJfyoOEOgSb",
		"3:47": "aTwhiJfyoOEOgSb",
		"3:48": "rdIiiwhasyQHsS",
		"3:49": "rdIiiwhasyQHsS",
		"3:50": "zo1Hd3tozKsOgY",
		"3:51": "evdgGExIgioOgHe",
		"3:52": "evdgGExIgioOgHe",
		"3:53": "xeTZz1dh3_wFlEu",
		"3:54": "uephBmkupvQHsGd",
		"3:55": "uephBmkupvQHsGd",
		"3:56": "xiuuKQroPHcHsSe",
		"3:57": "xiuuKQroPHcHsSe",
		"3:58": "lfGwR1gaQYoTsSc",
		"3:59": "t4gkmcmwBrwHsSe",
		"4:00": "sxssAArYRGAOgHe",
		"4:01": "sxssAArYRGAOgHe",
		"4:02": "obTE4aTynIoOgHe",
		"4:03": "obTE4aTynIoOgHe",
		"4:04": "3ucrwgmeBtkHsGd",
		"4:05": "OxwNHQplFpoOgSe",
		"4:06": "OxwNHQplFpoOgSe",
		"4:07": "pEoYAeJ_gOkTsAl",
		"4:08": "m2cOKpkvN2cTsFe",
		"4:09": "oueYkBT22PwOg",
		"4:10": "zYsPTBq2aEwOg",
		"4:11": "zYsPTBq2aEwOg",
		"4:12": "wivuhAAxlecTsBa",
		"4:13": "wivuhAAxlecTsBa",
		"4:14": "QRqiOaiwteEOgSb",
		"4:15": "yPwOl5BIjosAmH",
		"4:16": "vx2Q1Nas1QsFlTe",
		"4:17": "vx2Q1Nas1QsFlTe",
		"4:18": "mmQ1akRwxBsHsGd",
		"4:19": "-bcANEglbI_TsHsBe",
		"4:20": "-bcANEglbI_TsHsBe",
		"4:21": "uxzBq4Y_fNwOgO",
		"4:22": "v_xPZuAfg1kSgBa",
		"4:23": "edHesrFRpQgFlTe",
		"4:24": "edHesrFRpQgFlTe",
		"4:25": "tpmAholHR1wFlSm",
		"4:26": "xsJopwNT2fsOgTe",
		"4:27": "xsJopwNT2fsOgTe",
		"4:28": "hZARIbmubgoHsS",
		"4:29": "zydZQOR_lwQOgSb",
		"4:30": "ccQAgyqxqQQTsAl",
		"4:31": "ccQAgyqxqQQTsAl",
		"4:32": "xGcyrucn3fIHsS",
		"4:33": "xGcyrucn3fIHsS",
		"4:34": "jJdZJ1GwjxAFlEu",
		"4:35": "jJdZJ1GwjxAFlEu",
		"4:36": "dSxxsnOc3w0OgGa",
		"4:37": "ugcPtZyxZ6EEs",
		"4:38": "zW8fpEOOw0wAtHe",
		"4:39": "zW8fpEOOw0wAtHe",
		"4:40": "cyTxxEhS4ucOgY",
		"4:41": "OGkQQ_q_HYgHsSc",
		"4:42": "OGkQQ_q_HYgHsSc",
		"4:43": "wP-O4JlKclcFlSc",
		"4:44": "w-s3NTuw-ToFlTe",
		"4:45": "w-s3NTuw-ToFlTe",
		"4:46": "vNExj-bJIgsTs",
		"4:47": "vNExj-bJIgsTs",
		"4:48": "bxbPOqJBjFoOgTi",
		"4:49": "bxbPOqJBjFoOgTi",
		"4:50": "zpu2JwTxf_oFlEu",
		"4:51": "zpu2JwTxf_oFlEu",
		"4:52": "xohyFEGR2hgTsSb",
		"4:53": "sEZ_dHGN4ywOgSb",
		"4:54": "stsnuh3kFGETsSb",
		"4:55": "uukzTxpfYygTsSc",
		"4:56": "uukzTxpfYygTsSc",
		"4:57": "vgSbuFawtfwHsB",
		"4:58": "vgSbuFawtfwHsB",
		"4:59": "wnO0H8sBgRYHsS",
		"5:00": "-_drvG3kKw_BhAg",
		"5:01": "Bbl-AnunGpcTsSb",
		"5:02": "Bbl-AnunGpcTsSb",
		"5:03": "lnFHlfwRSysOgAs",
		"5:04": "cTAntdHvbYwTsS",
		"5:05": "cTAntdHvbYwTsS",
		"5:06": "zEhfHOZQjocTsSb",
		"5:07": "zEhfHOZQjocTsSb",
		"5:08": "b4vmFxGpvucTsAg",
		"5:09": "b4vmFxGpvucTsAg",
		"5:10": "kA4bGJmAEhcFlEu",
		"5:11": "acmwKwchOPgFlSc",
		"5:12": "acmwKwchOPgFlSc",
		"5:13": "uKzp_cyvwv4BhSb",
		"5:14": "jiEvibbf-hIHsS",
		"5:15": "jiEvibbf-hIHsS",
		"5:16": "ZqcSccSchg_qzOgAl",
		"5:17": "iskjEgwj4uQFlEu",
		"5:18": "bwBQPpGPvesHsSe",
		"5:19": "bwBQPpGPvesHsSe",
		"5:20": "bAff-sGw-KkBhSb",
		"5:21": "PjF11baJ2ewFlY",
		"5:22": "z_e1slzjAowFlEu",
		"5:23": "z_e1slzjAowFlEu",
		"5:24": "zd1hk3vxwZUAt",
		"5:25": "wpbsaypZlhgFlEu",
		"5:26": "wpbsaypZlhgFlEu",
		"5:27": "eyupkrpm1ocFlEu",
		"5:28": "GowJeGcf_KkBhSb",
		"5:29": "OtKmFttytQ_SgGa",
		"5:30": "pOQfqiEdKKwOgAl",
		"5:31": "pOQfqiEdKKwOgAl",
		"5:32": "djmec-BweegHsGd",
		"5:33": "djmec-BweegHsGd",
		"5:34": "wBytqPGninQOgY",
		"5:35": "wBytqPGninQOgY",
		"5:36": "yTOaO2T2lPAHsSe",
		"5:37": "uff1toooAxkFlEu",
		"5:38": "nduA4gTkKgcBhSb",
		"5:39": "ltfPxiTGaukOgAl",
		"5:40": "ltfPxiTGaukOgAl",
		"5:41": "RAimv4eiwxsFlEu",
		"5:42": "ylcscJNBm_YOgO",
		"5:43": "ylcscJNBm_YOgO",
		"5:44": "gjQ4vaYySkwOgBe",
		"5:45": "gjQ4vaYySkwOgBe",
		"5:46": "ysjYp1NBFywTs",
		"5:47": "ysjYp1NBFywTs",
		"5:48": "rudzYPHuewcOgBe",
		"5:49": "qo3iQvnisTkFlEu",
		"5:50": "hslYEQ-Rx1sTsSc",
		"5:51": "PrJJdJummvAOg",
		"5:52": "wFPvPA1afrQTsSc",
		"5:53": "wFPvPA1afrQTsSc",
		"5:54": "uw4IkdcjpggHsS",
		"5:55": "Nau-vgnHuHATsTc",
		"5:56": "Nau-vgnHuHATsTc",
		"5:57": "PyPf-KsGqjsFlSi",
		"5:58": "neHuNY-w2fgOgO",
		"5:59": "igtvbriAYmcTsSc",
		"6:00": "igtvbriAYmcTsSc",
		"6:01": "fJaEmBTZj_sHsGd",
		"6:02": "OeHlFSiTAPkTsAl",
		"6:03": "OeHlFSiTAPkTsAl",
		"6:04": "yKb_hZQFgKATsAl",
		"6:05": "yKb_hZQFgKATsAl",
		"6:06": "hcEk_zmwImgHsS",
		"6:07": "prt1bk2B-gsHsGd",
		"6:08": "ebTrld_dRpAFlEu",
		"6:09": "pKwsPBeSiOcTs",
		"6:10": "pKwsPBeSiOcTs",
		"6:11": "mlqAvhjxAjoFlEu",
		"6:12": "mlqAvhjxAjoFlEu",
		"6:13": "sPcghmmjxioSgBa",
		"6:14": "sPcghmmjxioSgBa",
		"6:15": "GcHOn-EEiBcHsSb",
		"6:16": "kGp_vJq-2awFlEu",
		"6:17": "cT-jGQ2bpggFlEu",
		"6:18": "gQSabq2fGhYOgBe",
		"6:19": "oQbOHPHwPxQSgGa",
		"6:20": "oQbOHPHwPxQSgGa",
		"6:21": "cglhnfbbSdgOgY",
		"6:22": "cglhnfbbSdgOgY",
		"6:23": "kkbbeWggqsQEsBe",
		"6:24": "o-swhAjntvAFlEu",
		"6:25": "o-swhAjntvAFlEu",
		"6:26": "xp1u2RlpoxQFlEu",
		"6:27": "QtsElPKywqgTsFe",
		"6:28": "QtsElPKywqgTsFe",
		"6:29": "kg1_uS_bZigOgTc",
		"6:30": "kg1_uS_bZigOgTc",
		"6:31": "PKtnafFtfEoOgS",
		"6:32": "NfOAAf4kFOoFlGa",
		"6:33": "auHEjieszAoFlSm",
		"6:34": "qoxjzGypOAAOgSb",
		"6:35": "wQidAZQhxbAFlEu",
		"6:36": "wQidAZQhxbAFlEu",
		"6:37": "KoTfcR2QKGsOgSc",
		"6:38": "vu_BusuilosTsSb",
		"6:39": "yqaQJ_tmbPASgBa",
		"6:40": "yqaQJ_tmbPASgBa",
		"6:41": "wdiolszkeioFlEu",
		"6:42": "wdiolszkeioFlEu",
		"6:43": "zS4mavnAaiQOgTc",
		"6:44": "codpbgGpcqQFlEu",
		"6:45": "codpbgGpcqQFlEu",
		"6:46": "NffmujESqNwFlAs",
		"6:47": "O3GBsa1-dKsFlGa",
		"6:48": "O3GBsa1-dKsFlGa",
		"6:49": "o2rn1bwHHREHsHo",
		"6:50": "qh-hkHuc_wEFlSm",
		"6:51": "qh-hkHuc_wEFlSm",
		"6:52": "fpaxvjFh-qATsSb",
		"6:53": "EqHKcpvxllcOgY",
		"6:54": "hgZelygG_qYTsSc",
		"6:55": "hgZelygG_qYTsSc",
		"6:56": "rekcqRG1wmYTsSc",
		"6:57": "GtQPsyEHHZQTsTc",
		"6:58": "GtQPsyEHHZQTsTc",
		"6:59": "YHrbH2dQHEcFlSc",
		"7:00": "YHrbH2dQHEcFlSc",
		"7:01": "x5KeK3ARrPYAt",
		"7:02": "cofteQs2RyAFlEu",
		"7:03": "cofteQs2RyAFlEu",
		"7:04": "j-gtbGpTteQFlEu",
		"7:05": "j-gtbGpTteQFlEu",
		"7:06": "lSs-ubhPGQEFlGe",
		"7:07": "lSs-ubhPGQEFlGe",
		"7:08": "QBbelnfEeHEHsEu",
		"7:09": "s_alotsHliAHsGd",
		"7:10": "s_alotsHliAHsGd",
		"7:11": "sPBJihaYspgOg",
		"7:12": "sPBJihaYspgOg",
		"7:13": "bfFfvgqtoyETsSb",
		"7:14": "GTtce3rJxhcFlEu",
		"7:15": "ooBvzeguzBcFmHo",
		"7:16": "ooBvzeguzBcFmHo",
		"7:17": "dtNbOpGOjmwOgHe",
		"7:18": "dtNbOpGOjmwOgHe",
		"7:19": "hGiNRlmpidsOgTe",
		"7:20": "hGiNRlmpidsOgTe",
		"7:21": "QdJzibQuyHEFlSm",
		"7:22": "wwr6EgxeevEFlEu",
		"7:23": "ayh_QbtJftIHsS",
		"7:24": "ayh_QbtJftIHsS",
		"7:25": "sfP1OqtggSkTsSc",
		"7:26": "fbxyqeIylHEOgB",
		"7:27": "ttldaEHlZZsFlSm",
		"7:28": "ttldaEHlZZsFlSm",
		"7:29": "IgRrcpwwzE4HsS",
		"7:30": "IgRrcpwwzE4HsS",
		"7:31": "khOZ_EtkhOYOgBe",
		"7:32": "khOZ_EtkhOYOgBe",
		"7:33": "eeeGsxpOjNQSgBa",
		"7:34": "vw2uOljxgTAOgSb",
		"7:35": "vw2uOljxgTAOgSb",
		"7:36": "yyyhxRztamEFlEu",
		"7:37": "yyyhxRztamEFlEu",
		"7:38": "zRyHGy4rFqYFlSi",
		"7:39": "zRyHGy4rFqYFlSi",
		"7:40": "QjealGtlKjQBhSb",
		"7:41": "suN_4cZN-aoBhBa",
		"7:42": "suN_4cZN-aoBhBa",
		"7:43": "To4xdjsxQAgTsAl",
		"7:44": "Nev2-f2cfjoFmHo",
		"7:45": "jG-zo_oA2joFlEu",
		"7:46": "jG-zo_oA2joFlEu",
		"7:47": "ryFvH4EjaxoFmHo",
		"7:48": "ryFvH4EjaxoFmHo",
		"7:49": "d1kwJtkFtwATsSb",
		"7:50": "kiTTAbeqQKYOgH",
		"7:51": "kiTTAbeqQKYOgH",
		"7:52": "QPhcbZriB4oTs",
		"7:53": "bdiGlNbz_QcFlTi",
		"7:54": "bdiGlNbz_QcFlTi",
		"7:55": "l_GAF_fy2SATsGa",
		"7:56": "l_GAF_fy2SATsGa",
		"7:57": "nYcnhe_y21gOgS",
		"7:58": "nYcnhe_y21gOgS",
		"7:59": "ZqGesno_FiQFlTi",
		"8:00": "TZOmpbGz-vsOgSb",
		"8:01": "qommxIcfoosHsS",
		"8:02": "qommxIcfoosHsS",
		"8:03": "JxvG4rBQePsOgY",
		"8:04": "dnFSRNgtH2QOgFe",
		"8:05": "dnFSRNgtH2QOgFe",
		"8:06": "-pFKsqGyu_sOgGa",
		"8:07": "-pFKsqGyu_sOgGa",
		"8:08": "1tseQzv3_IEHsS",
		"8:09": "wNN-TRirvHYOgB",
		"8:10": "wNN-TRirvHYOgB",
		"8:11": "bthHZpjdJi4FlSm",
		"8:12": "bthHZpjdJi4FlSm",
		"8:13": "qrfnaR4adiIHsS",
		"8:14": "qrfnaR4adiIHsS",
		"8:15": "BROKEN_____SgBa",
		"8:16": "BROKEN_____SgBa",
		"8:17": "KFwOQ4_nv-cHsAs",
		"8:18": "ZEwAkZq1ZsAFlEu",
		"8:19": "ZEwAkZq1ZsAFlEu",
		"8:20": "SfJc-FB4dbQFlAs",
		"8:21": "hYJJHvwitfESgGa",
		"8:22": "hYJJHvwitfESgGa",
		"8:23": "QBgqntNfsToOgAg",
		"8:24": "QBgqntNfsToOgAg",
		"8:25": "HQavntn-sncFlSm",
		"8:26": "dvq-ixRvwGAFlEu",
		"8:27": "dvq-ixRvwGAFlEu",
		"8:28": "bZ2FxmxpotsTsSb",
		"8:29": "bZ2FxmxpotsTsSb",
		"8:30": "hgfzxaFOyqwTsTc",
		"8:31": "hgfzxaFOyqwTsTc",
		"8:32": "brcBPJj2QgwOgY",
		"8:33": "xeK-B4iPxvoTsSc",
		"8:34": "bqtqltqcQhwFlEu",
		"8:35": "bqtqltqcQhwFlEu",
		"8:36": "OBGFxlkfOdEFlAs",
		"8:37": "OBGFxlkfOdEFlAs",
		"8:38": "gAEOeYkfG_wTsAl",
		"8:39": "gAEOeYkfG_wTsAl",
		"8:40": "lJJvcG4_vSAOgTc",
		"8:41": "Ymqkj3hlqGATsSc",
		"8:42": "Ymqkj3hlqGATsSc",
		"8:43": "szE4qGfdHzEFlSm",
		"8:44": "szE4qGfdHzEFlSm",
		"8:45": "lROkdtcGFHwHsSb",
		"8:46": "mQqRtaoyAdwFlEu",
		"8:47": "mQqRtaoyAdwFlEu",
		"8:48": "RGhydvSY_AwOgBe",
		"8:49": "RGhydvSY_AwOgBe",
		"8:50": "FgvATdNQeOcFlY",
		"8:51": "FgvATdNQeOcFlY",
		"8:52": "FtBfPQymvdETsGa",
		"8:53": "FtBfPQymvdETsGa",
		"8:54": "u3qbwIl1l-QHsS",
		"8:55": "u3qbwIl1l-QHsS",
		"8:56": "haaqZflhemoFlEu",
		"8:57": "vwuQPfvSSloTsAl",
		"8:58": "vwuQPfvSSloTsAl",
		"8:59": "qroAEArkSPkFlSi",
		"9:00": "qroAEArkSPkFlSi",
		"9:01": "ia__-tHQPvcOgTc",
		"9:02": "ia__-tHQPvcOgTc",
		"9:03": "lhAgaRzAEGgTsAl",
		"9:04": "xPEjZYQaxusOgB",
		"9:05": "iwTOEASFyfkOgFe",
		"9:06": "iwTOEASFyfkOgFe",
		"9:07": "qytSTZ_ebyQOgTc",
		"9:08": "qytSTZ_ebyQOgTc",
		"9:09": "osgjyexGTEoFlEu",
		"9:10": "osgjyexGTEoFlEu",
		"9:11": "dZbu_Qe-tdgFlEu",
		"9:12": "oT3uuggQqcgFlEu",
		"9:13": "roRHdPhvjaoOgTc",
		"9:14": "roRHdPhvjaoOgTc",
		"9:15": "dNxyFtqcNssBhAg",
		"9:16": "dNxyFtqcNssBhAg",
		"9:17": "johRpvcEmQcFlEu",
		"9:18": "johRpvcEmQcFlEu",
		"9:19": "paaz_y-v1eQFlEu",
		"9:20": "paaz_y-v1eQFlEu",
		"9:21": "fRouYd-o_EwTsSc",
		"9:22": "fRouYd-o_EwTsSc",
		"9:23": "cOmh_YqpqtsTsAl",
		"9:24": "yfTiSyiAj3kOgSc",
		"9:25": "yfTiSyiAj3kOgSc",
		"9:26": "va-YHeytvFQOgF",
		"9:27": "va-YHeytvFQOgF",
		"9:28": "tysZObbs4YoTsAl",
		"9:29": "tQiiaFE1e-YHsSc",
		"9:30": "qiNcEguuFSAFlGa",
		"9:31": "qiNcEguuFSAFlGa",
		"9:32": "mBbHfjoz1owFm",
		"9:33": "iNuzxoz50ZEOgTe",
		"9:34": "j2_dJY_mIysAt",
		"9:35": "tK1npHenAScFlSc",
		"9:36": "sYiP-nqdwaAOgB",
		"9:37": "sYiP-nqdwaAOgB",
		"9:38": "RS_TrEbaizgOgTc",
		"9:39": "npTphztFoacTsSb",
		"9:40": "fGhp_dvtjQYTsSc",
		"9:41": "qkdBEwfQBxQFmHo",
		"9:42": "qkdBEwfQBxQFmHo",
		"9:43": "mxeqhcEbySwOgTc",
		"9:44": "mxeqhcEbySwOgTc",
		"9:45": "qpsuEjycnFoTsSb",
		"9:46": "ZlAd-KK_T-sOgSc",
		"9:47": "ohJPiBdbbbAOgY",
		"9:48": "ohJPiBdbbbAOgY",
		"9:49": "pvxe21suhGwTsBa",
		"9:50": "xlpqeREimKgBhSb",
		"9:51": "xlpqeREimKgBhSb",
		"9:52": "fjEB_wbemQAHsGd",
		"9:53": "fjEB_wbemQAHsGd",
		"9:54": "q-zcIvdJxooHsS",
		"9:55": "q-zcIvdJxooHsS",
		"9:56": "opRzhzxwamcFlEu",
		"9:57": "fh-pnqjnuywFlEu",
		"9:58": "fh-pnqjnuywFlEu",
		"9:59": "sBehb_Fa_qgTsAg",
		"10:00": "sBehb_Fa_qgTsAg",
		"10:01": "zg1HB_fPvtQTsY",
		"10:02": "pbxvhASkYwkOgBe",
		"10:03": "pbxvhASkYwkOgBe",
		"10:04": "wzziKyoo-aoBhSb",
		"10:05": "_fdAeTdlBpwTsSb",
		"10:06": "_fdAeTdlBpwTsSb",
		"10:07": "Al_xpzOZtggTsY",
		"10:08": "wpAwdsubl1wTsBa",
		"10:09": "pHTwllpq4oAFlSm",
		"10:10": "pHTwllpq4oAFlSm",
		"10:11": "vrjAIBgxm_wOgH",
		"10:12": "vrjAIBgxm_wOgH",
		"10:13": "vNlaEFc_qrgOgTc",
		"10:14": "vNlaEFc_qrgOgTc",
		"10:15": "qQ1celvPNzsHsAg",
		"10:16": "GTfyvmfTzzgFlEu",
		"10:17": "GTfyvmfTzzgFlEu",
		"10:18": "fmwZyqtmopYTsSc",
		"10:19": "fmwZyqtmopYTsSc",
		"10:20": "Ktbp-aoETEYOgH",
		"10:21": "G_tqJoog-tYTsSc",
		"10:22": "vypvgkmZxkgFlEu",
		"10:23": "cjlpEtzxhTIHsS",
		"10:24": "cjlpEtzxhTIHsS",
		"10:25": "Av-jbmBPEgwOgY",
		"10:26": "Av-jbmBPEgwOgY",
		"10:27": "uTkQbSQpJewOgTc",
		"10:28": "uTkQbSQpJewOgTc",
		"10:29": "iFE1bkuBotkBhBa",
		"10:30": "ObOEc_J-mHETsTc",
		"10:31": "ObOEc_J-mHETsTc",
		"10:32": "F13ec-aTdRwTsSb",
		"10:33": "xAjjipdlrHQFlSm",
		"10:34": "bOoHTxjJufYHsSc",
		"10:35": "bOoHTxjJufYHsSc",
		"10:36": "ywgKfdBmAfsFlY",
		"10:37": "ywgKfdBmAfsFlY",
		"10:38": "wvoQmf_QplcFlEu",
		"10:39": "wvoQmf_QplcFlEu",
		"10:40": "_w-lhmbhnQcFlEu",
		"10:41": "fcARdYz1rrwTsSc",
		"10:42": "fcARdYz1rrwTsSc",
		"10:43": "r1aodO2-SEgFlY",
		"10:44": "r1aodO2-SEgFlY",
		"10:45": "nuATcGhzExEOgS",
		"10:46": "zBn3bdNONnwOgGe",
		"10:47": "zBn3bdNONnwOgGe",
		"10:48": "yxzaFgu4_fETsSb",
		"10:49": "yxzaFgu4_fETsSb",
		"10:50": "RsvF_BcggPcTsGa",
		"10:51": "yeg_YGpxlikTsSc",
		"10:52": "yeg_YGpxlikTsSc",
		"10:53": "wAaov-ubjfEFlEu",
		"10:54": "wAaov-ubjfEFlEu",
		"10:55": "viiEHzz2EkAFlSm",
		"10:56": "viiEHzz2EkAFlSm",
		"10:57": "He1RzEIxptEOgBe",
		"10:58": "K2xjowl_iQEBhSb",
		"10:59": "sxtbcOEtpoEOgAg",
		"11:00": "sxtbcOEtpoEOgAg",
		"11:01": "wITJjjnyejgHsS",
		"11:02": "wITJjjnyejgHsS",
		"11:03": "lmrcqtbeppQFlEu",
		"11:04": "lmrcqtbeppQFlEu",
		"11:05": "wRPAqxJY3loOgB",
		"11:06": "yycbqNcvHE_qOgAg",
		"11:07": "yycbqNcvHE_qOgAg",
		"11:08": "uZuzsBHBmvQFlTe",
		"11:09": "uZuzsBHBmvQFlTe",
		"11:10": "tbqarAFGspETsSb",
		"11:11": "tbqarAFGspETsSb",
		"11:12": "uPZplwAtynwOsH",
		"11:13": "vxF1osPkplAFlY",
		"11:14": "iuuFivEbHusBhBa",
		"11:15": "iuuFivEbHusBhBa",
		"11:16": "F-wlKiaP-GoOgS",
		"11:17": "qvdHvb_uR_QFlSm",
		"11:18": "qvdHvb_uR_QFlSm",
		"11:19": "byxEledFpEETsAg",
		"11:20": "byxEledFpEETsAg",
		"11:21": "pSatdrqfgjsOgTc",
		"11:22": "_GrBFSNsfmoOgTi",
		"11:23": "iBjhQ4kddyIOgH",
		"11:24": "oyrNH_megrsOgSb",
		"11:25": "v2Aeto_oxjgFlEu",
		"11:26": "vf_2eGRBllAHsGd",
		"11:27": "vf_2eGRBllAHsGd",
		"11:28": "TpeTyjhtkggFlEu",
		"11:29": "nGylcQTShacOgTc",
		"11:30": "wEQvx-wpcrcFlEu",
		"11:31": "wEQvx-wpcrcFlEu",
		"11:32": "GlSqTuuvfdgOgTc",
		"11:33": "GlSqTuuvfdgOgTc",
		"11:34": "BQ-koxE_Q_YTsS",
		"11:35": "xcknq-wQn3EFlEu",
		"11:36": "JavlibhEfgAFlEu",
		"11:37": "JavlibhEfgAFlEu",
		"11:38": "NTicAwls-cAOgFe",
		"11:39": "NTicAwls-cAOgFe",
		"11:40": "mvw-ohFc_GYTsO",
		"11:41": "mvw-ohFc_GYTsO",
		"11:42": "JOpauE_EEjEOgSb",
		"11:43": "JOpauE_EEjEOgSb",
		"11:44": "steK1_mu1SEHsSe",
		"11:45": "tFRidwwRlJYHsSc",
		"11:46": "he_P_a_EbAkSgBa",
		"11:47": "he_P_a_EbAkSgBa",
		"11:48": "wxGRGpBaaAoTsBe",
		"11:49": "wxGRGpBaaAoTsBe",
		"11:50": "jfNyBYJxx2gOgO",
		"11:51": "yjOx-dpY-_oTsAl",
		"11:52": "yjOx-dpY-_oTsAl",
		"11:53": "ljd-_rAay4AFlEu",
		"11:54": "ym1QkZgY3-wTsSc",
		"11:55": "ym1QkZgY3-wTsSc",
		"11:56": "wBgqAKxujkEFlY",
		"11:57": "wBgqAKxujkEFlY",
		"11:58": "EvwudGaJS4cTsAl",
		"11:59": "nBGOYJTEN2AOg",
		"12:00": "xdqQquPvKBQTsSc",
		"12:01": "xdqQquPvKBQTsSc",
		"12:02": "jNsPTgA4ndsHsAg",
		"12:03": "i-FYgfgn4_kHsSc",
		"12:04": "pt4-OubbcJcOgSb",
		"12:05": "pt4-OubbcJcOgSb",
		"12:06": "htsjQHeFyTEFlTe",
		"12:07": "htsjQHeFyTEFlTe",
		"12:08": "fqyZ2SidAfYHsS",
		"12:09": "teJcxglGzesFlEu",
		"12:10": "mYqSotmAkegOgBe",
		"12:11": "mYqSotmAkegOgBe",
		"12:12": "hsxz3uHPlOQFlY",
		"12:13": "t4OumncEiKoOgGe",
		"12:14": "t4OumncEiKoOgGe",
		"12:15": "qSQRx1gveFEOgSe",
		"12:16": "suhfO-m4QGYTsAl",
		"12:17": "suhfO-m4QGYTsAl",
		"12:18": "oFGggkdppcoTsSb",
		"12:19": "taQtqlwpoRsFlEu",
		"12:20": "taQtqlwpoRsFlEu",
		"12:21": "gQwxngpah-sFlEu",
		"12:22": "gQwxngpah-sFlEu",
		"12:23": "eeklduOaEt8OgSb",
		"12:24": "ffutRhsopwoOgSi",
		"12:25": "ffutRhsopwoOgSi",
		"12:26": "vnfqhGPyOF4FlGa",
		"12:27": "v1dph3AJ-ckFlEu",
		"12:28": "v1dph3AJ-ckFlEu",
		"12:29": "PhtcaxqzFcAFlY",
		"12:30": "PhtcaxqzFcAFlY",
		"12:31": "nxNBKdKn-EwOgF",
		"12:32": "tfxdonEmtTcTsAl",
		"12:33": "tfxdonEmtTcTsAl",
		"12:34": "gjvkyHhhAyYSgGa",
		"12:35": "NaFeEcpxobAFlTi",
		"12:36": "NaFeEcpxobAFlTi",
		"12:37": "zzKpFHEqO4wOgTi",
		"12:38": "lvkwizbyBBYFlSi",
		"12:39": "zSdqfvwFGmQOgSe",
		"12:40": "zSdqfvwFGmQOgSe",
		"12:41": "wP1moQm40yESgBa",
		"12:42": "kn4mpvbmdywFlEu",
		"12:43": "kn4mpvbmdywFlEu",
		"12:44": "xtkyztGmPQsSgBa",
		"12:45": "-HiGJJsghyAFlSm",
		"12:46": "-HiGJJsghyAFlSm",
		"12:47": "zkokOkg1piQOgSb",
		"12:48": "ylbQeBpp3QkHsGd",
		"12:49": "ylbQeBpp3QkHsGd",
		"12:50": "jBuqOyGuGlATsAg",
		"12:51": "jBuqOyGuGlATsAg",
		"12:52": "gKxcjqgHiFoTsGa",
		"12:53": "zapJeJZvyAgTsAl",
		"12:54": "tvmFomyhEYsTsO",
		"12:55": "tvmFomyhEYsTsO",
		"12:56": "fj3iywbEb1QFlEu",
		"12:57": "vqloAjgr3moFlEu",
		"12:58": "yxuFZiwzHG4FmHo",
		"12:59": "uNq_Q-bgq_gOgTe",
		"13:00": "uNq_Q-bgq_gOgTe",
		"13:01": "oaJf2uxK_uABhSb",
		"13:02": "q_yoh-KbqQYOgH",
		"13:03": "q_yoh-KbqQYOgH",
		"13:04": "xGiS2ZQirdoOgTc",
		"13:05": "y3GkxuJyYcsTsSc",
		"13:06": "y3GkxuJyYcsTsSc",
		"13:07": "kwSTiTkuhf4OgSc",
		"13:08": "whlRToeJ1bAFlEu",
		"13:09": "whlRToeJ1bAFlEu",
		"13:10": "PF-RHtRc2GoOgSe",
		"13:11": "PF-RHtRc2GoOgSe",
		"13:12": "Kl4oomaSlloHsSe",
		"13:13": "eqP1P1PQpJcOgSi",
		"13:14": "eqP1P1PQpJcOgSi",
		"13:15": "H-mJEc_2_TgFlSm",
		"13:16": "A-eARjipxOEOgSb",
		"13:17": "PTtgupSquxgFlGe",
		"13:18": "PTtgupSquxgFlGe",
		"13:19": "G-aPgqpjGEcSgBa",
		"13:20": "G-aPgqpjGEcSgBa",
		"13:21": "xxSFFpeTpdQTsFe",
		"13:22": "xxSFFpeTpdQTsFe",
		"13:23": "oEmsYnkqFnsHsSc",
		"13:24": "TibAhnZTAqgHsAg",
		"13:25": "TibAhnZTAqgHsAg",
		"13:26": "zH51oPE0Q-IHs",
		"13:27": "bwIlGZodBfwOgH",
		"13:28": "bwIlGZodBfwOgH",
		"13:29": "pZl2rOvRxscOgSb",
		"13:30": "wSRcydgxkxgOgTc",
		"13:31": "wSRcydgxkxgOgTc",
		"13:32": "vhw_inkc-AEFlEu",
		"13:33": "zpvZJOOAbbAOgTc",
		"13:34": "zpvZJOOAbbAOgTc",
		"13:35": "-wrAwGKqeusBhSb",
		"13:36": "wStBid4mknoOsHe",
		"13:37": "x_uliInbqhkFlSi",
		"13:38": "x_uliInbqhkFlSi",
		"13:39": "hlGid_tskJkFlEu",
		"13:40": "wFHHjGkxFGYOg",
		"13:41": "wFHHjGkxFGYOg",
		"13:42": "zaumyfPx3AoSgBa",
		"13:43": "zaumyfPx3AoSgBa",
		"13:44": "Gv3ucNH1zYETsAl",
		"13:45": "Gv3ucNH1zYETsAl",
		"13:46": "ZcEAoZEoohEFlEu",
		"13:47": "ZcEAoZEoohEFlEu",
		"13:48": "oNxGFNaJBygFlGa",
		"13:49": "uZ4tdfqYxNsOgAl",
		"13:50": "udQRhdf4uQsOgSi",
		"13:51": "udQRhdf4uQsOgSi",
		"13:52": "ndK-itPSvBsOgBe",
		"13:53": "gykmon_em2AFlEu",
		"13:54": "p_xhAqbiz3AFlEu",
		"13:55": "yqdlruxh1tIHsS",
		"13:56": "yhdmgjJ_QSEOgTc",
		"13:57": "yhdmgjJ_QSEOgTc",
		"13:58": "ebTEOGvnuwcOgAg",
		"13:59": "ebTEOGvnuwcOgAg",
		"14:00": "PvPTuiHcTygHsSe",
		"14:01": "kvdu3GlqiAQFlEu",
		"14:02": "miqZIZzHtwEOgB",
		"14:03": "miqZIZzHtwEOgB",
		"14:04": "evvumjwAvTQFlEu",
		"14:05": "evvumjwAvTQFlEu",
		"14:06": "vemghwoyAJIHsS",
		"14:07": "vemghwoyAJIHsS",
		"14:08": "zz1qITOyxScAm",
		"14:09": "cGyyQfsvN-YOgAl",
		"14:10": "cGyyQfsvN-YOgAl",
		"14:11": "wSTxws1kAdoOgTc",
		"14:12": "wSTxws1kAdoOgTc",
		"14:13": "fmvdtJetwbQFlEu",
		"14:14": "fmvdtJetwbQFlEu",
		"14:15": "gsF-BQP-bQoTsGa",
		"14:16": "rrPhAsiRiQQHsSc",
		"14:17": "rrPhAsiRiQQHsSc",
		"14:18": "EigOKPTqpmQFlSc",
		"14:19": "EigOKPTqpmQFlSc",
		"14:20": "GBouxGf-T-wTsSb",
		"14:21": "qHPjiduaSEoFlGa",
		"14:22": "qHPjiduaSEoFlGa",
		"14:23": "ydt_pRraJOcOgSb",
		"14:24": "fPHQQzJPlhcFlGe",
		"14:25": "fPHQQzJPlhcFlGe",
		"14:26": "ce1udO-OGQAOgTc",
		"14:27": "NF1gdujhPlsFlGe",
		"14:28": "Px4vnbuelxsBhSb",
		"14:29": "tGjoqjbOusgOgSb",
		"14:30": "tGjoqjbOusgOgSb",
		"14:31": "luRyhE2rwugFlEu",
		"14:32": "yu_aBPlGRBcOgSe",
		"14:33": "yu_aBPlGRBcOgSe",
		"14:34": "ExPqGQyJPJwFlAs",
		"14:35": "ExPqGQyJPJwFlAs",
		"14:36": "sitHTBQPsRcTsY",
		"14:37": "sitHTBQPsRcTsY",
		"14:38": "lAyGvbBxwhcTsSb",
		"14:39": "qciqozxAgaQTsAl",
		"14:40": "qciqozxAgaQTsAl",
		"14:41": "nsNynguyBGkOgAg",
		"14:42": "feOqpcJ-zTAOgSb",
		"14:43": "FzEewEh_EHwFmHo",
		"14:44": "FzEewEh_EHwFmHo",
		"14:45": "4_ayqZGs_qzTsBa",
		"14:46": "TKPqu-wktBwTsSc",
		"14:47": "TKPqu-wktBwTsSc",
		"14:48": "31ojdfiHblAFlSm",
		"14:49": "nFElHizOHu4BhSb",
		"14:50": "fboozhIoyEwHsS",
		"14:51": "lcYpf-_tqZcTsSc",
		"14:52": "lcYpf-_tqZcTsSc",
		"14:53": "xSdlAkwhEEkOgTc",
		"14:54": "xSdlAkwhEEkOgTc",
		"14:55": "-wxjxtxGYhkTsSc",
		"14:56": "BfPT4ixsxjAOgY",
		"14:57": "yeZuyI1m2JgHsS",
		"14:58": "sffqPRiApScHsAs",
		"14:59": "sffqPRiApScHsAs",
		"15:00": "_bHpmaF-qtsFmHo",
		"15:01": "hegAK-TNNggOgFe",
		"15:02": "cPivZQZpbfASgBa",
		"15:03": "cPivZQZpbfASgBa",
		"15:04": "wYxcdqyBl3cTsS",
		"15:05": "EGhcZlE-4HkFlSm",
		"15:06": "tsistTTK1YQOgH",
		"15:07": "tsistTTK1YQOgH",
		"15:08": "oEdhYqfs3hgTsSc",
		"15:09": "oEdhYqfs3hgTsSc",
		"15:10": "S-KZ4BbEKcoOg",
		"15:11": "zuTd2fUxHygBiH",
		"15:12": "prakKhiPfvETsFe",
		"15:13": "RoFSqtrivFsTsFe",
		"15:14": "RoFSqtrivFsTsFe",
		"15:15": "qeJ-undA_iIHsS",
		"15:16": "duOFuPFbGGQFlTi",
		"15:17": "duOFuPFbGGQFlTi",
		"15:18": "Jdo2Kqusdw_jkqBhAg",
		"15:19": "Tv1QbjNyPJAHsAg",
		"15:20": "Ouivipy-ZNESgBa",
		"15:21": "zJTJ3HYxySwTsBe",
		"15:22": "KkdBEBKuabkHsSc",
		"15:23": "olhcjYtFxmgHsSc",
		"15:24": "olhcjYtFxmgHsSc",
		"15:25": "emFaiNYr-dEOgBe",
		"15:26": "zwdvQbUhsq0At",
		"15:27": "giOBEZvZQoETsAg",
		"15:28": "giOBEZvZQoETsAg",
		"15:29": "Pkl_lA1j_EoSgBa",
		"15:30": "Pkl_lA1j_EoSgBa",
		"15:31": "vwiOoTNvtBQOgY",
		"15:32": "vwiOoTNvtBQOgY",
		"15:33": "OlnmOBHwjNgTsGa",
		"15:34": "a2rKgybGP_wTsFe",
		"15:35": "rRrSaNH-R-AFlY",
		"15:36": "rRrSaNH-R-AFlY",
		"15:37": "cZGZYn2qq1QTsSc",
		"15:38": "cZGZYn2qq1QTsSc",
		"15:39": "seakAbF1JfoTsSb",
		"15:40": "xzGBZudNwOYOg",
		"15:41": "xzGBZudNwOYOg",
		"15:42": "tfnFNvmwJxYOgBe",
		"15:43": "i-mwGpGvfjYTsSc",
		"15:44": "i-mwGpGvfjYTsSc",
		"15:45": "qTuF2ljzJlATsSb",
		"15:46": "tS6m2kY-EpkOgBe",
		"15:47": "tS6m2kY-EpkOgBe",
		"15:48": "cf2T_Skq1xcOgTc",
		"15:49": "mGHmYgkmJFsFlSi",
		"15:50": "bEOEQYiGFGsTsBe",
		"15:51": "bEOEQYiGFGsTsBe",
		"15:52": "sveFnwpKmPwOgS",
		"15:53": "r2mlfuaebxcFlEu",
		"15:54": "ibddibakbSsOgTc",
		"15:55": "ibddibakbSsOgTc",
		"15:56": "dAztcH-zZQgFlSm",
		"15:57": "SpRvSR_oJJ4FlGa",
		"15:58": "uPHlSrR1kbEOgB",
		"15:59": "oyah-NEt_BYOgBe",
		"16:00": "oyah-NEt_BYOgBe",
		"16:01": "qcugnluNcfoOgTe",
		"16:02": "qcugnluNcfoOgTe",
		"16:03": "lakfertrSTQOgTc",
		"16:04": "GlQBnTgGousHsGd",
		"16:05": "b-yQwvPetQYOgB",
		"16:06": "b-yQwvPetQYOgB",
		"16:07": "otolHzENH3wTsSb",
		"16:08": "otolHzENH3wTsSb",
		"16:09": "uly-adxeZGkFlEu",
		"16:10": "uly-adxeZGkFlEu",
		"16:11": "zeOmSyiJqq4FlY",
		"16:12": "zeOmSyiJqq4FlY",
		"16:13": "HmaTAbyR-zEFlSm",
		"16:14": "ds_qcOBjtioTsAg",
		"16:15": "ds_qcOBjtioTsAg",
		"16:16": "dkHyH_t3_PgTsTc",
		"16:17": "dkHyH_t3_PgTsTc",
		"16:18": "jjIHvGAGwQ4OgB",
		"16:19": "jjIHvGAGwQ4OgB",
		"16:20": "EanOeKoT__EOgGe",
		"16:21": "EanOeKoT__EOgGe",
		"16:22": "rtHwxdBaEoAOgHe",
		"16:23": "rtHwxdBaEoAOgHe",
		"16:24": "lz-aAipGlZEFlEu",
		"16:25": "qn3srYvQpbsTsSc",
		"16:26": "e2ZnNfl_aeEOgTi",
		"16:27": "whkmB2trAakHsGd",
		"16:28": "whkmB2trAakHsGd",
		"16:29": "ougmhvyA_d4TsBa",
		"16:30": "tIimjsilduEHsS",
		"16:31": "tIimjsilduEHsS",
		"16:32": "v2QuiEZilasFlEu",
		"16:33": "v2QuiEZilasFlEu",
		"16:34": "I31dZqBJswwOgH",
		"16:35": "_vSBqlplZEoTsY",
		"16:36": "_vSBqlplZEoTsY",
		"16:37": "zjhhBdusfmYTsS",
		"16:38": "xtu-3oecteoTsBa",
		"16:39": "xtu-3oecteoTsBa",
		"16:40": "rZlGStO_EPsTsSc",
		"16:41": "rZlGStO_EPsTsSc",
		"16:42": "laGttpuPnwQSgBa",
		"16:43": "laGttpuPnwQSgBa",
		"16:44": "jkcydFx_gYoHsSc",
		"16:45": "zAyqABGsZqQHsGd",
		"16:46": "zAyqABGsZqQHsGd",
		"16:47": "qgqwHOwbntsTsSb",
		"16:48": "phmPJqJwoecSgBa",
		"16:49": "ob-oZqxtUusAt",
		"16:50": "sNsSnwg2loEFlHe",
		"16:51": "_EjtpIBQ-_sOgH",
		"16:52": "_EjtpIBQ-_sOgH",
		"16:53": "dEeYr_GGAdwTsSc",
		"16:54": "dEeYr_GGAdwTsSc",
		"16:55": "vtKiOZthsosOgGe",
		"16:56": "msAitFgarpcTsSb",
		"16:57": "msAitFgarpcTsSb",
		"16:58": "i22rHpjBHjEOgTe",
		"16:59": "u_melFtiOmQTsTc",
		"17:00": "u_melFtiOmQTsTc",
		"17:01": "p1mluujFcvcTsSb",
		"17:02": "p1mluujFcvcTsSb",
		"17:03": "yfmZ4ohlBGIOgH",
		"17:04": "yfmZ4ohlBGIOgH",
		"17:05": "GsK_bYcxjyEOgH",
		"17:06": "roq8cUcw_HkBiH",
		"17:07": "yxx3Bkmv3ckHg",
		"17:08": "lYHepOyyzm4FlSi",
		"17:09": "lYHepOyyzm4FlSi",
		"17:10": "v0m4ZF2qAQ0TsSb",
		"17:11": "fcQQcpbkvJsFlEu",
		"17:12": "fcQQcpbkvJsFlEu",
		"17:13": "R_wIkowrET4HsS",
		"17:14": "jtIxpdbdHbEOgB",
		"17:15": "jtIxpdbdHbEOgB",
		"17:16": "-wwp_Zi_ezoFlEu",
		"17:17": "-wwp_Zi_ezoFlEu",
		"17:18": "gJbmR3I1iBsOgH",
		"17:19": "xsgguhFelKsOgSi",
		"17:20": "xsgguhFelKsOgSi",
		"17:21": "hTgxxmRvxygFlEu",
		"17:22": "OqQOaScdTJwOgTi",
		"17:23": "EyTtBHlxIysFl",
		"17:24": "EyTtBHlxIysFl",
		"17:25": "zsoOuQStd-kFlY",
		"17:26": "1ocONrEwhlcSgBa",
		"17:27": "ddzTZBfuaBYFlSi",
		"17:28": "ddzTZBfuaBYFlSi",
		"17:29": "QpQpsGrvlEYTsSc",
		"17:30": "QpQpsGrvlEYTsSc",
		"17:31": "wltEkq1BjTcHsSc",
		"17:32": "sohfOvslPAsTs",
		"17:33": "sohfOvslPAsTs",
		"17:34": "rhedpNtqsQoOgTe",
		"17:35": "rhedpNtqsQoOgTe",
		"17:36": "BscAT_iQI1AOgH",
		"17:37": "oSkiN_sdg1QBhAg",
		"17:38": "wFhqqOE_dKgHsAs",
		"17:39": "wFhqqOE_dKgHsAs",
		"17:40": "w4kygohyojIHsS",
		"17:41": "Zbkil4kutwIHsS",
		"17:42": "Zbkil4kutwIHsS",
		"17:43": "vGP_ABzmk1gOgY",
		"17:44": "vGP_ABzmk1gOgY",
		"17:45": "qcuc3rgwZAEFlEu",
		"17:46": "qcuc3rgwZAEFlEu",
		"17:47": "fHJchOtb2_ATsSb",
		"17:48": "fHJchOtb2_ATsSb",
		"17:49": "yWZ4mdOhhukAm",
		"17:50": "h2yicpQqvdsFlEu",
		"17:51": "h2yicpQqvdsFlEu",
		"17:52": "govSEaEP4HAHsAs",
		"17:53": "qkyPvhapxQsSgBa",
		"17:54": "qkyPvhapxQsSgBa",
		"17:55": "tvmFEPiyJPkTsSc",
		"17:56": "qFHxkZdz4HAFlTe",
		"17:57": "tcbfqfgqigoFlEu",
		"17:58": "tcbfqfgqigoFlEu",
		"17:59": "aQiab_-xtKgBhSb",
		"18:00": "aQiab_-xtKgBhSb",
		"18:01": "oBRt3ZAadBYFlSi",
		"18:02": "swATo0S6PS0OgO",
		"18:03": "qQkb-BmSsQgTsY",
		"18:04": "qQkb-BmSsQgTsY",
		"18:05": "s3ihrKGvyrEBhSb",
		"18:06": "sPiFysaglcsOgGa",
		"18:07": "sPiFysaglcsOgGa",
		"18:08": "lkbftbfHdKgOgY",
		"18:09": "rSob4c-1hEwOgTc",
		"18:10": "dB4JmyaooesHsGd",
		"18:11": "sOBAdKipu4cFlGa",
		"18:12": "aiAbwmzbGyAFlEu",
		"18:13": "aiAbwmzbGyAFlEu",
		"18:14": "eiA3byGTejATsO",
		"18:15": "eiA3byGTejATsO",
		"18:16": "ieOSRiRdG_cFlY",
		"18:17": "ieOSRiRdG_cFlY",
		"18:18": "bfevcsANSr4OgSi",
		"18:19": "bfevcsANSr4OgSi",
		"18:20": "zAP5dlvzqo0SgBa",
		"18:21": "muvcqunRN6EOgTe",
		"18:22": "uGtwBZ1vq2wHsGd",
		"18:23": "uGtwBZ1vq2wHsGd",
		"18:24": "sigIJw_-AacHsS",
		"18:25": "sigIJw_-AacHsS",
		"18:26": "kt3b-FvOTxoTsTc",
		"18:27": "kwFkkrRHrQoFmHo",
		"18:28": "xR2ZmPqG_-sSgBa",
		"18:29": "xR2ZmPqG_-sSgBa",
		"18:30": "kcgaKASuBqcSgGa",
		"18:31": "kcgaKASuBqcSgGa",
		"18:32": "ymi-oFkx_rQTsSb",
		"18:33": "BROKEN_____OgH",
		"18:34": "BROKEN_____OgH",
		"18:35": "oAopav-lHxEHsGd",
		"18:36": "oAopav-lHxEHsGd",
		"18:37": "G1wgGRcmxIEHsS",
		"18:38": "nb_qho0heJUAt",
		"18:39": "zEwSPecezJYBh",
		"18:40": "EvfqdqPloBQOgY",
		"18:41": "EvfqdqPloBQOgY",
		"18:42": "laQRlb4bnhsFlEu",
		"18:43": "laQRlb4bnhsFlEu",
		"18:44": "jQApnbths3oFlEu",
		"18:45": "_EzZiv-jt4YTsSc",
		"18:46": "_aR_qwbBOxwTsAg",
		"18:47": "_aR_qwbBOxwTsAg",
		"18:48": "ySzxfuHqilwTsTc",
		"18:49": "ySzxfuHqilwTsTc",
		"18:50": "tFtZ1jJqFfwHsSb",
		"18:51": "ScsfxTgGkHQHsAg",
		"18:52": "tlS-SF_ctOQFlSi",
		"18:53": "tlS-SF_ctOQFlSi",
		"18:54": "OnsnZTYoe-cTsAl",
		"18:55": "OnsnZTYoe-cTsAl",
		"18:56": "vvw-8fnecwQFlEu",
		"18:57": "pxO3p-bJivoOgSb",
		"18:58": "pxO3p-bJivoOgSb",
		"18:59": "OKpwPljtEAEFlSc",
		"19:00": "zoiwSs1inZEOgTc",
		"19:01": "zoiwSs1inZEOgTc",
		"19:02": "zAv3xfg_sfAFlEu",
		"19:03": "zAv3xfg_sfAFlEu",
		"19:04": "lvZABH3nuocHsEu",
		"19:05": "v-omnt_qPfkSgBa",
		"19:06": "lPq_btcQiOEBhAg",
		"19:07": "lPq_btcQiOEBhAg",
		"19:08": "wZ3oGTHUesABiH",
		"19:09": "e_cuRyq-mlcFlEu",
		"19:10": "e_cuRyq-mlcFlEu",
		"19:11": "EQQcOKfHpsQOgGa",
		"19:12": "EQQcOKfHpsQOgGa",
		"19:13": "ssHdFvOaz7AHsSb",
		"19:14": "m-aayo7wgpoTsBa",
		"19:15": "piFAQ4iPwgEFlY",
		"19:16": "yvf-AhkpyEoFlEu",
		"19:17": "yvf-AhkpyEoFlEu",
		"19:18": "zAqmGcH-izAFlSm",
		"19:19": "zAqmGcH-izAFlSm",
		"19:20": "qipkv3siQloFlEu",
		"19:21": "qipkv3siQloFlEu",
		"19:22": "GjbqybEAYfcTsSc",
		"19:23": "ovjcpbIGjBAOgH",
		"19:24": "ovjcpbIGjBAOgH",
		"19:25": "f4IZBffdGQkOgH",
		"19:26": "dvY1jiftQFAHsSc",
		"19:27": "spsE1To_wjsFlEu",
		"19:28": "spsE1To_wjsFlEu",
		"19:29": "ev2obEw4IHkOgB",
		"19:30": "wJxxZP-EjbESgBa",
		"19:31": "PEhbRdQ-QyESgBa",
		"19:32": "PEhbRdQ-QyESgBa",
		"19:33": "lcmcgOvvER4OgSb",
		"19:34": "jIsq_fugwsEHsS",
		"19:35": "jIsq_fugwsEHsS",
		"19:36": "FkaFcvAyvmgHsSb",
		"19:37": "FkaFcvAyvmgHsSb",
		"19:38": "eZJgTYylglETsSc",
		"19:39": "vwYoYtEBAlEOsH",
		"19:40": "cwaZTg4hIoAHsS",
		"19:41": "iA4Khfro_KwOgSc",
		"19:42": "sAIjBAZoghAOgH",
		"19:43": "wgixEn3EtNEFlTe",
		"19:44": "wgixEn3EtNEFlTe",
		"19:45": "ozbem_kh4-AFlEu",
		"19:46": "rqQApxshzYETsSc",
		"19:47": "ORxdRFssc-oTsTc",
		"19:48": "_TfHy_aEpmYTsS",
		"19:49": "_TfHy_aEpmYTsS",
		"19:50": "PpqfczkfqlgSgBa",
		"19:51": "eadoBji_JEEHsGd",
		"19:52": "eadoBji_JEEHsGd",
		"19:53": "cmfpdAhBYaAHsSc",
		"19:54": "_lPHPHAxltoHsAs",
		"19:55": "_lPHPHAxltoHsAs",
		"19:56": "m_d3BsoaQhEHsGd",
		"19:57": "b1fRZh2GiScTsY",
		"19:58": "lybsZGEotRwFlEu",
		"19:59": "lybsZGEotRwFlEu",
		"20:00": "dNcqAeEgohwOgTe",
		"20:01": "dNcqAeEgohwOgTe",
		"20:02": "ydiGAdjtvgsFlEu",
		"20:03": "ydiGAdjtvgsFlEu",
		"20:04": "sHJiOZTvOccTsTc",
		"20:05": "sHJiOZTvOccTsTc",
		"20:06": "y-FqyZjpSyAOgSe",
		"20:07": "y-FqyZjpSyAOgSe",
		"20:08": "mtysglpb-BIFlH",
		"20:09": "mtysglpb-BIFlH",
		"20:10": "wmu-nzbHH-QHsHo",
		"20:11": "_iQR_YlsxdETsSc",
		"20:12": "_iQR_YlsxdETsSc",
		"20:13": "EbAwbFbrueYHsSc",
		"20:14": "fpEedKmOxxEOgGe",
		"20:15": "fpEedKmOxxEOgGe",
		"20:16": "HuF-uozGz_AFmHo",
		"20:17": "yuBARdwxxowHsGd",
		"20:18": "yuBARdwxxowHsGd",
		"20:19": "d-sbT_zwQSEOgTc",
		"20:20": "vABphmpqOQsTsAg",
		"20:21": "vABphmpqOQsTsAg",
		"20:22": "dRdrTOBohsoTsAg",
		"20:23": "BqpsycrqTwAHsGd",
		"20:24": "pRWPR0JdyFEAu",
		"20:25": "HnsuuTqGPewOgTc",
		"20:26": "QqwdNwwQPqQHsAg",
		"20:27": "gHEKsekTyKoTsSc",
		"20:28": "gHEKsekTyKoTsSc",
		"20:29": "rgAgqry-cokTsAl",
		"20:30": "rgAgqry-cokTsAl",
		"20:31": "pyaF-jSZeiQOgSe",
		"20:32": "mKj-t2JoBJcFlY",
		"20:33": "whmqtpFfpdwTsSb",
		"20:34": "whmqtpFfpdwTsSb",
		"20:35": "oEbTS4lzQOQFlY",
		"20:36": "oEbTS4lzQOQFlY",
		"20:37": "fdHmRkHS_ioHsSb",
		"20:38": "xiB1eejdgdQHsGd",
		"20:39": "TdetZOGwwQEOgSb",
		"20:40": "lHiuGOHpmnoBhBa",
		"20:41": "lHiuGOHpmnoBhBa",
		"20:42": "upkfmifpZ4IHsS",
		"20:43": "upkfmifpZ4IHsS",
		"20:44": "bsQmoj2m2YkTsSc",
		"20:45": "dFpqSnv_avwOg",
		"20:46": "dFpqSnv_avwOg",
		"20:47": "cGqEBvlmFAQBhBa",
		"20:48": "cGqEBvlmFAQBhBa",
		"20:49": "miwdmscuFfETsAg",
		"20:50": "miwdmscuFfETsAg",
		"20:51": "lcozsZuvatQFlEu",
		"20:52": "ze-yx_ZgpecFlEu",
		"20:53": "ze-yx_ZgpecFlEu",
		"20:54": "mdwv-PzyeqESgBa",
		"20:55": "mdwv-PzyeqESgBa",
		"20:56": "vknsNgdKpdAOgAs",
		"20:57": "fxieKFowcjEOgGa",
		"20:58": "fxieKFowcjEOgGa",
		"20:59": "nOQNAzvZQnASgBa",
		"21:00": "yasAwfAkcBgHsGd",
		"21:01": "yasAwfAkcBgHsGd",
		"21:02": "qYupippGfGcTsSc",
		"21:03": "qYupippGfGcTsSc",
		"21:04": "-tB_adyqijAHsGd",
		"21:05": "bgAwgI1HZacOgB",
		"21:06": "ukTHyklqyiEFlSm",
		"21:07": "ukTHyklqyiEFlSm",
		"21:08": "lmmh4lkvrToFlEu",
		"21:09": "AntcEmvgqeYTsSc",
		"21:10": "AntcEmvgqeYTsSc",
		"21:11": "mivaYecxmzATsSc",
		"21:12": "mivaYecxmzATsSc",
		"21:13": "gfITTrl2b1wHsS",
		"21:14": "cclcJoqpaSQOgTc",
		"21:15": "cclcJoqpaSQOgTc",
		"21:16": "ycelvHNQSwcFlY",
		"21:17": "ycelvHNQSwcFlY",
		"21:18": "v12tbjdoHIQOgB",
		"21:19": "_kawt2AFceQTsSb",
		"21:20": "vfa_2iRcTKsBhSb",
		"21:21": "apsFhzbOatATsTc",
		"21:22": "apsFhzbOatATsTc",
		"21:23": "wmJxKjiodxkBhSb",
		"21:24": "gyp2q2G_GkQFlEu",
		"21:25": "zeoovSB1dqkTsY",
		"21:26": "zeoovSB1dqkTsY",
		"21:27": "gQifzqaTTZgFlEu",
		"21:28": "zQgyou_zIQsHsS",
		"21:29": "zQgyou_zIQsHsS",
		"21:30": "jJBa-JyxlzgTsBe",
		"21:31": "kgtuHlpn_IEOgB",
		"21:32": "qPZhwyvA4OcBhAg",
		"21:33": "qPZhwyvA4OcBhAg",
		"21:34": "oJjNvxhmj1sOgTe",
		"21:35": "avuHvnsRQrsFlSm",
		"21:36": "t3_uK-HElhkOgY",
		"21:37": "cOmgslHwgpcTsAg",
		"21:38": "cOmgslHwgpcTsAg",
		"21:39": "PHwast_nGsYOg",
		"21:40": "OSod_P_thiAOgS",
		"21:41": "1Aam-YszHxsSgGa",
		"21:42": "RbcbpqFA_cQOgAl",
		"21:43": "RbcbpqFA_cQOgAl",
		"21:44": "To1plZGqg2cFlEu",
		"21:45": "BPZ4f-dKm_sTsSc",
		"21:46": "v3PHeGEvbvQTsTc",
		"21:47": "v3PHeGEvbvQTsTc",
		"21:48": "rhP4mj_xScwHsAs",
		"21:49": "SzGOyHbi-jwOgSe",
		"21:50": "N-nIQQuAhu4Ts",
		"21:51": "N-nIQQuAhu4Ts",
		"21:52": "hqaYlNBcpAwOgO",
		"21:53": "hqaYlNBcpAwOgO",
		"21:54": "jqQ1ltgp-tIHsS",
		"21:55": "hlZhxpdxmPwSgBa",
		"21:56": "hlZhxpdxmPwSgBa",
		"21:57": "zSt2I-ekZ-EHs",
		"21:58": "bt-YsloklakTsSc",
		"21:59": "bt-YsloklakTsSc",
		"22:00": "bHqiYQqclHkFlTi",
		"22:01": "bHqiYQqclHkFlTi",
		"22:02": "tigocuoyJx4FlEu",
		"22:03": "gdOpyudgjmwOgSb",
		"22:04": "qpudqbOdKSQOgS",
		"22:05": "qpudqbOdKSQOgS",
		"22:06": "x__qGOHP-1AFlY",
		"22:07": "x__qGOHP-1AFlY",
		"22:08": "s1iZ1-e1SfAOgTc",
		"22:09": "dkoqvlGuzvQFlEu",
		"22:10": "SyFxF4NryfoFlTi",
		"22:11": "SyFxF4NryfoFlTi",
		"22:12": "yxx3FhyzbFYOgHe",
		"22:13": "yxx3FhyzbFYOgHe",
		"22:14": "aiBRpdb1HxYOgSi",
		"22:15": "ipzshwvHcnsFlSm",
		"22:16": "ipzshwvHcnsFlSm",
		"22:17": "leTjElxNQEYOgAl",
		"22:18": "leTjElxNQEYOgAl",
		"22:19": "1bKHmmyfSwQHsAs",
		"22:20": "fI_AQntrgicHsS",
		"22:21": "n-dQdPeid_QSgBa",
		"22:22": "n-dQdPeid_QSgBa",
		"22:23": "TypFkTfl_wwTsSb",
		"22:24": "TypFkTfl_wwTsSb",
		"22:25": "TIif3wgdeaEOgHe",
		"22:26": "TIif3wgdeaEOgHe",
		"22:27": "RQ3odzdbB-AHsGd",
		"22:28": "v1x2_KHNTwAOgGe",
		"22:29": "v1x2_KHNTwAOgGe",
		"22:30": "knNvkGHbkQYTsAl",
		"22:31": "rJaqTGR3ARYTsSc",
		"22:32": "rJaqTGR3ARYTsSc",
		"22:33": "Zv-Y4cqvEhETsSc",
		"22:34": "ugcozgEZv_gFlEu",
		"22:35": "ugcozgEZv_gFlEu",
		"22:36": "uvtoGPEAdswBhSb",
		"22:37": "uvtoGPEAdswBhSb",
		"22:38": "eyA4xxyydEoTsBa",
		"22:39": "eyA4xxyydEoTsBa",
		"22:40": "s2qrnT60AvgFlEu",
		"22:41": "y-OGGubZd1QOgSb",
		"22:42": "OiHpu-mdcrQTsSb",
		"22:43": "OiHpu-mdcrQTsSb",
		"22:44": "q1uTYkOlGvETsAl",
		"22:45": "GQRu_ltP-ucOg",
		"22:46": "GQRu_ltP-ucOg",
		"22:47": "ANeexOuTnAQHsSb",
		"22:48": "ANeexOuTnAQHsSb",
		"22:49": "w4qEBBRBmOcBhAg",
		"22:50": "w4qEBBRBmOcBhAg",
		"22:51": "w_rhiQaGKbQBhSb",
		"22:52": "w_rhiQaGKbQBhSb",
		"22:53": "lY-llZ2OAbETsAl",
		"22:54": "lY-llZ2OAbETsAl",
		"22:55": "azuQtpF-AnQTsSb",
		"22:56": "bHaAeSnO_HEHsB",
		"22:57": "bHaAeSnO_HEHsB",
		"22:58": "geRymtZtmOoOgSb",
		"22:59": "geRymtZtmOoOgSb",
		"23:00": "wSGuy3-uGGoOgY",
		"23:01": "BpetlIualbkOgH",
		"23:02": "deqfqFgGKkEOgGa",
		"23:03": "unHlaSxOHwgFlAs",
		"23:04": "unHlaSxOHwgFlAs",
		"23:05": "xYq4vZsy_psTsSc",
		"23:06": "xYq4vZsy_psTsSc",
		"23:07": "vKTulaBSkJ4SgGa",
		"23:08": "vKTulaBSkJ4SgGa",
		"23:09": "vzk4xFyFfTEHsSb",
		"23:10": "vzk4xFyFfTEHsSb",
		"23:11": "PsSFiv-yobwTsS",
		"23:12": "PsSFiv-yobwTsS",
		"23:13": "tnAztNll2-AOgTe",
		"23:14": "yhPRkihs-YgOgB",
		"23:15": "yhPRkihs-YgOgB",
		"23:16": "uHtRju2EcsQFlSm",
		"23:17": "uHtRju2EcsQFlSm",
		"23:18": "o2bwsqvkKaoBhSb",
		"23:19": "axi2khkpnHIOgB",
		"23:20": "vovohmoiSSwHsAs",
		"23:21": "vovohmoiSSwHsAs",
		"23:22": "NlN-_yB1kacBhSb",
		"23:23": "-eb-fTTSiA4HsSb",
		"23:24": "wSTyK-b-tuoHsSe",
		"23:25": "wSTyK-b-tuoHsSe",
		"23:26": "rsixtgYdzeETsSc",
		"23:27": "rsixtgYdzeETsSc",
		"23:28": "3TtaBEabN_sOgTc",
		"23:29": "3TtaBEabN_sOgTc",
		"23:30": "FswnzwvOo1wTsTc",
		"23:31": "GF4HTGEpnlQFmHo",
		"23:32": "OG2ZZbcxxTEOgSb",
		"23:33": "OG2ZZbcxxTEOgSb",
		"23:34": "vpcvxqrarF0TsSb",
		"23:35": "OTrYiQc3qjoTsAl",
		"23:36": "OTrYiQc3qjoTsAl",
		"23:37": "QObQcP_QlKQFlSc",
		"23:38": "QObQcP_QlKQFlSc",
		"23:39": "sJhsmqFQejgTsSb",
		"23:40": "sJhsmqFQejgTsSb",
		"23:41": "BROKEN_____FlGe",
		"23:42": "oPGOawtaNNkOgTi",
		"23:43": "z0FjBPzYdpcHsH",
		"23:44": "FnRS4dtyaoAOgSe",
		"23:45": "vaGmqdNcteEOgTe",
		"23:46": "vaGmqdNcteEOgTe",
		"23:47": "wPwqTSxhzr4FlGe",
		"23:48": "QijnwafQxeAFlEu",
		"23:49": "kHEgqFihe_oFmHo",
		"23:50": "kHEgqFihe_oFmHo",
		"23:51": "rQcav-3UblQAt",
		"23:52": "fskFoqloxKkOgGa",
		"23:53": "fskFoqloxKkOgGa",
		"23:54": "xQlBew-mRdkTsBa",
		"23:55": "xQlBew-mRdkTsBa",
		"23:56": "rwbhtdKTEeEBhSb",
		"23:57": "AHuhzhtZT3EFlSm",
		"23:58": "iHyqvFgPRzAOgSe",
		"23:59": "txcxtmHvx1sHsGd",
		"24:00": "y1Ek-yBSlAwTsY",
		"24:01": "y1Ek-yBSlAwTsY",
		"24:02": "SxAHRwt-tAkTsTc",
		"24:03": "SxAHRwt-tAkTsTc",
		"24:04": "y0gFJaSBQEIUHe",
		"24:05": "PqzlpzP-hvwFlAs",
		"24:06": "_spoyklAkggFlEu",
		"24:07": "_spoyklAkggFlEu",
		"24:08": "wdhtpZ2JZewFlEu",
		"24:09": "wdhtpZ2JZewFlEu",
		"24:10": "E2xBw2rrjroHsGd",
		"24:11": "E2xBw2rrjroHsGd",
		"24:12": "xxAQwd5bWlgEsBe",
		"24:13": "ZAqwFZFv4scHsSb",
		"24:14": "xiKYv1rhqGgOgH",
		"24:15": "ggsqvFsgoKkOgGa",
		"24:16": "ggsqvFsgoKkOgGa",
		"24:17": "aYAHGKtQqcQOg",
		"24:18": "HbstbqnpwfIOgB",
		"24:19": "HbstbqnpwfIOgB",
		"24:20": "ujRImvE-Ou8FlHe",
		"24:21": "ujRImvE-Ou8FlHe",
		"24:22": "BcAZA2YREdgTsS",
		"24:23": "BcAZA2YREdgTsS",
		"24:24": "zUidhf6svZQAt",
		"24:25": "Jt3xtStOnsoFlY",
		"24:26": "Jt3xtStOnsoFlY",
		"24:27": "mSjvsS-HdwAOgFe",
		"24:28": "mSjvsS-HdwAOgFe",
		"24:29": "_ciSdcldorQOgTc",
		"24:30": "_ciSdcldorQOgTc",
		"24:31": "1NlxBbBN-mEOgGa",
		"24:32": "QKHFbeQmHQQFlAs",
		"24:33": "QKHFbeQmHQQFlAs",
		"24:34": "ikctfKEwZZwBhSb",
		"24:35": "tOpEJR0_Ho0FmHe",
		"24:36": "mGsafpPhe2kSgBa",
		"24:37": "cynqY_iFBwAHsS",
		"24:38": "cynqY_iFBwAHsS",
		"24:39": "uQ3bbgbmkrIHsS",
		"24:40": "uQ3bbgbmkrIHsS",
		"24:41": "aypEx5gvOrEOgSb",
		"24:42": "ZcZfxuhqfqoFlEu",
		"24:43": "ZcZfxuhqfqoFlEu",
		"24:44": "cAN-aQHElEEOgSb",
		"24:45": "tdzetylTHFEFmHo",
		"24:46": "tdzetylTHFEFmHo",
		"24:47": "ebf2Gg2bsmwTsBa",
		"24:48": "v_asAv8u-vETsBa",
		"24:49": "agASFFHpZswHsSe",
		"24:50": "mxmKuTqp_dgBhSb",
		"24:51": "mxmKuTqp_dgBhSb",
		"24:52": "xIyt6smw1vEOgHe",
		"24:53": "TzZSsyw3pPcFlGe",
		"24:54": "BROKEN_____BhSb",
		"24:55": "tjwzSAOm_lEFlY",
		"24:56": "tjwzSAOm_lEFlY",
		"24:57": "iBHE-l2NOKwSgGa",
		"24:58": "_bKgeqmmqNcOgAs",
		"24:59": "_bKgeqmmqNcOgAs",
		"25:00": "gifrBZb_1tYTsS",
		"25:01": "Pltaqfkpi-oSgBa",
		"25:02": "Pltaqfkpi-oSgBa",
		"25:03": "hdeuzHdtZAYSgGa",
		"25:04": "hdeuzHdtZAYSgGa",
		"25:05": "vSQrriirSNwTsSc",
		"25:06": "vSQrriirSNwTsSc",
		"25:07": "jqHFfe4Zj1AFmHo",
		"25:08": "dkhbdRhtaooOgSi",
		"25:09": "sptjBekF-mgTsAg",
		"25:10": "sptjBekF-mgTsAg",
		"25:11": "hzekdsxBs2AHsGd",
		"25:12": "GsmtrGG4_bwFlEu",
		"25:13": "wpfneYne41EOgS",
		"25:14": "tkTTgoHhkbQFlSm",
		"25:15": "tkTTgoHhkbQFlSm",
		"25:16": "slmbfx4SodgOgY",
		"25:17": "tOJ_BdGsekcTsAg",
		"25:18": "sQjwvJuhOPEBhAg",
		"25:19": "sQjwvJuhOPEBhAg",
		"25:20": "xo4KGRldu-oBhSb",
		"25:21": "xo4KGRldu-oBhSb",
		"25:22": "oxmpUQ5AqNAOsHe",
		"25:23": "yBE8dmhtNdwHs",
		"25:24": "x-jEObj1EOAOgTc",
		"25:25": "x-jEObj1EOAOgTc",
		"25:26": "usFszlBw_GEBhBa",
		"25:27": "usFszlBw_GEBhBa",
		"25:28": "tpeqpfAowYYEs",
		"25:29": "oixhtoEYBQYUHe",
		"25:30": "dz-3plw5dbUAt",
		"25:31": "dz-3plw5dbUAt",
		"25:32": "mhh4bAjryGcFlEu",
		"25:33": "gQAeuqq_ydEFlEu",
		"25:34": "gQAeuqq_ydEFlEu",
		"25:35": "SaJbbfvviQYOgBe",
		"25:36": "GwhKpaqOHxcOgGa",
		"25:37": "GwhKpaqOHxcOgGa",
		"25:38": "eHKoSEg_QqcHsAs",
		"25:39": "eHKoSEg_QqcHsAs",
		"25:40": "ocbx1cmOrOQOgTc",
		"25:41": "ouQ121eGhosFlEu",
		"25:42": "ouQ121eGhosFlEu",
		"25:43": "-eenfpvEIHEOgH",
		"25:44": "-eenfpvEIHEOgH",
		"25:45": "q-rhmug3zywFlEu",
		"25:46": "q-rhmug3zywFlEu",
		"25:47": "_indnHwaTkoFlSm",
		"25:48": "_indnHwaTkoFlSm",
		"25:49": "BerRrzmeyicTsBa",
		"25:50": "BerRrzmeyicTsBa",
		"25:51": "rgOfiabA-gEOgSb",
		"25:52": "rgOfiabA-gEOgSb",
		"25:53": "vJorcluiylgFlEu",
		"25:54": "xphr-1B2iaoHsGd",
		"25:55": "xphr-1B2iaoHsGd",
		"25:56": "JugwkGHpkbYSgGa",
		"25:57": "JugwkGHpkbYSgGa",
		"25:58": "IbbtzGz2nucHsS",
		"25:59": "tHt-tEB-hdYFlSi",
		"26:00": "tHt-tEB-hdYFlSi",
		"26:01": "nJ4w1yaxTccOgS",
		"26:02": "nJ4w1yaxTccOgS",
		"26:03": "qoqmwz-PkwkSgBa",
		"26:04": "qoqmwz-PkwkSgBa",
		"26:05": "kuOhihQcASsFlY",
		"26:06": "kuOhihQcASsFlY",
		"26:07": "lmheIgzq2kkHsS",
		"26:08": "ydxufx7yxNAFlTe",
		"26:09": "Ha-TFa-wxZwFmHo",
		"26:10": "Ha-TFa-wxZwFmHo",
		"26:11": "ycsFelfskpwOgAs",
		"26:12": "ycsFelfskpwOgAs",
		"26:13": "wcPzTr-BbAAOgY",
		"26:14": "uawjxcKHkJYOg",
		"26:15": "oZeptvEaQwgFlEu",
		"26:16": "oZeptvEaQwgFlEu",
		"26:17": "pipoQkmbEPwSgBa",
		"26:18": "pipoQkmbEPwSgBa",
		"26:19": "sGftP2f-nqoSgBa",
		"26:20": "sGftP2f-nqoSgBa",
		"26:21": "stQSmj5xHPkEs",
		"26:22": "stQSmj5xHPkEs",
		"26:23": "wA4abGiOigEOgAg",
		"26:24": "RSplw-dOuasFlY",
		"26:25": "RSplw-dOuasFlY",
		"26:26": "xzSEjPm_J4QFm",
		"26:27": "woxrN2rrc6QOgTe",
		"26:28": "3-fNPvlwkKoFlTi",
		"26:29": "KvAoGq21KscOgSc",
		"26:30": "KvAoGq21KscOgSc",
		"26:31": "QgEROTolbQAOgSb",
		"26:32": "QgEROTolbQAOgSb",
		"26:33": "pqY-rBBytAoFlSi",
		"26:34": "pqY-rBBytAoFlSi",
		"26:35": "jE2txaRhfrsOgSi",
		"26:36": "jE2txaRhfrsOgSi",
		"26:37": "zf-sRhp3wtwOgSi",
		"26:38": "xi-fdglSKwkHsSe",
		"26:39": "xi-fdglSKwkHsSe",
		"26:40": "phA_mGxR4-AFlEu",
		"26:41": "-PhHceAvzJQOgTc",
		"26:42": "lNqqlaucRsoOgTe",
		"26:43": "lNqqlaucRsoOgTe",
		"26:44": "YlTr3wglbpkTsSc",
		"26:45": "wOwqd3PlEiABhAg",
		"26:46": "gdli-TTBElATsSb",
		"26:47": "gdli-TTBElATsSb",
		"26:48": "lAaoYTBzFGsHsS",
		"26:49": "lAaoYTBzFGsHsS",
		"26:50": "zvbtc31oEnQFlEu",
		"26:51": "zvbtc31oEnQFlEu",
		"26:52": "ydP_bOGskbwBhAg",
		"26:53": "ydP_bOGskbwBhAg",
		"26:54": "nboTFkNFqGAOgSe",
		"26:55": "_rSFP_rlS_ATsBe",
		"26:56": "_rSFP_rlS_ATsBe",
		"26:57": "yxoZNb3wHPwOgHe",
		"26:58": "yxoZNb3wHPwOgHe",
		"26:59": "tFnp_0lwo2kTsSb",
		"27:00": "vF5_g0NShYgFmHe",
		"27:01": "wldg-SSIw7sBiB",
		"27:02": "jQAEOaARj3sOgSb",
		"27:03": "dSBsjQJvwcsTsY",
		"27:04": "pntwvOdBenoOgTc",
		"27:05": "pntwvOdBenoOgTc",
		"27:06": "axKH2_wwqjAOgY",
		"27:07": "-piTrbowbYsTsSc",
		"27:08": "-piTrbowbYsTsSc",
		"27:09": "qPvhIyG5EAQHsH",
		"27:10": "ikdG0QTlPR0Tl",
		"27:11": "gnERtvheF2wTsSb",
		"27:12": "s3cBOlHBEAEBhAg",
		"27:13": "s3cBOlHBEAEBhAg",
		"27:14": "t_iJQbFbe7oTsSb",
		"27:15": "GaAiOelrQwATsSc",
		"27:16": "GaAiOelrQwATsSc",
		"27:17": "qPgmRcBZyqcOgY",
		"27:18": "qPgmRcBZyqcOgY",
		"27:19": "vH3YBFshA1AOgH",
		"27:20": "vH3YBFshA1AOgH",
		"27:21": "ozBmSa2lBeoOgSe",
		"27:22": "fRpfuTQAyhIHsS",
		"27:23": "fRpfuTQAyhIHsS",
		"27:24": "mAd3etGsySQOgTc",
		"27:25": "GNa_gaq-2FQOgY",
		"27:26": "f2zjujSEPFESgGa",
		"27:27": "yfmRxiPynNQHsAg",
		"27:28": "yfmRxiPynNQHsAg",
		"27:29": "lFng3sdevyoTsAg",
		"27:30": "lFng3sdevyoTsAg",
		"27:31": "Zd-xwwyiuYcTsSc",
		"27:32": "Zd-xwwyiuYcTsSc",
		"27:33": "zqblBq-fUJcHg",
		"27:34": "zqblBq-fUJcHg",
		"27:35": "w0OPewyNePATsO",
		"27:36": "ScvbulGKgdQSgGa",
		"27:37": "siOxNGAx_TQSgBa",
		"27:38": "siOxNGAx_TQSgBa",
		"27:39": "fPja-_dOPPgHsS",
		"27:40": "ABBp-ikv_GQFmHo",
		"27:41": "vBxO0mncNQAOgY",
		"27:42": "fQlPJmHZeYAOgBe",
		"27:43": "fQlPJmHZeYAOgBe",
		"27:44": "Evf3uJNxSTABhAg",
		"27:45": "bc1kYKAfwhgOgH",
		"27:46": "bc1kYKAfwhgOgH",
		"27:47": "yhqKiH4b3hEOgY",
		"27:48": "targHvzwy5IOgB",
		"27:49": "hBwFOrndQ2QHsAg",
		"27:50": "hBwFOrndQ2QHsAg",
		"27:51": "dNzvA-7ZNwsBhBa",
		"27:52": "huH-PzYKOaAAm",
		"27:53": "IH2mx1edoEkOgB",
		"27:54": "waOkpHJc2PgFlY",
		"27:55": "waOkpHJc2PgFlY",
		"27:56": "K_autmceJFoOgGa",
		"27:57": "yNN-SsfbB4ATsSc",
		"27:58": "yNN-SsfbB4ATsSc",
		"27:59": "FsuvimkuckQTsSb",
		"28:00": "FsuvimkuckQTsSb",
		"28:01": "llTOyPxaeooOgGe",
		"28:02": "llTOyPxaeooOgGe",
		"28:03": "nhE0ymwciHgUH",
		"28:04": "t4Fp2pQwgNgOgTc",
		"28:05": "J_jQtQyPJOEBhAg",
		"28:06": "J_jQtQyPJOEBhAg",
		"28:07": "r_uBHmAhnfoHsEu",
		"28:08": "r_uBHmAhnfoHsEu",
		"28:09": "eiretQENyr4OgTe",
		"28:10": "eiretQENyr4OgTe",
		"28:11": "aefvthRIt7AHsS",
		"28:12": "aefvthRIt7AHsS",
		"28:13": "OwbTq_4-jGgOgSb",
		"28:14": "vspaa1GAzbcFlEu",
		"28:15": "vspaa1GAzbcFlEu",
		"28:16": "PjpyfyETHaEOgTc",
		"28:17": "PjpyfyETHaEOgTc",
		"28:18": "xRKgGw0Yf7wOgH",
		"28:19": "O-1gxufhyioOgAg",
		"28:20": "O-1gxufhyioOgAg",
		"28:21": "xId34mpqxBcOgH",
		"28:22": "oKq3lhGwzdYOgH",
		"28:23": "oKq3lhGwzdYOgH",
		"28:24": "HaenjNBfphcTsAg",
		"28:25": "-xZpxtgg_JIHsS",
		"28:26": "woQHJO-HQioFmHo",
		"28:27": "woQHJO-HQioFmHo",
		"28:28": "TSyHqgSq_agOgFe",
		"28:29": "TSyHqgSq_agOgFe",
		"28:30": "y5NtZN_pbcQBhBa",
		"28:31": "OfQQvjSHmbgOgSe",
		"28:32": "OfQQvjSHmbgOgSe",
		"28:33": "yFp_BN4mkbYTs",
		"28:34": "_NYcqEqyOpkOgB",
		"28:35": "_qolnm2dA-YTsSc",
		"28:36": "_qolnm2dA-YTsSc",
		"28:37": "tutZSvauyhEOgTc",
		"28:38": "tutZSvauyhEOgTc",
		"28:39": "ghgBTOvJhwETsAg",
		"28:40": "_awtaymTJBQHsGd",
		"28:41": "_awtaymTJBQHsGd",
		"28:42": "13TTFhcRwmQTsSb",
		"28:43": "ttqEsg7qf_wOsHe",
		"28:44": "sak-taOOyYgOgBe",
		"28:45": "sak-taOOyYgOgBe",
		"28:46": "qZwzwmTdedYTsSc",
		"28:47": "qJHtyjTgHYAFlTi",
		"28:48": "qJHtyjTgHYAFlTi",
		"28:49": "AyeeJYx_wHcSgGa",
		"28:50": "AyeeJYx_wHcSgGa",
		"28:51": "-vGlrcayloEFlEu",
		"28:52": "-vGlrcayloEFlEu",
		"28:53": "hvRQyR1NricOgTe",
		"28:54": "hvRQyR1NricOgTe",
		"28:55": "whvHz4azNOAOgTc",
		"28:56": "whvHz4azNOAOgTc",
		"28:57": "TdJA3dtmh-AFlEu",
		"28:58": "YRld_AKievgOgH",
		"28:59": "-ndwmvIwQmoHsS",
		"29:00": "-ndwmvIwQmoHsS",
		"29:01": "j0wSohites0OgTc",
		"29:02": "zmPbzgu_Gn4Am",
		"29:03": "zmPbzgu_Gn4Am",
		"29:04": "pHv3phv3yNAOgAg",
		"29:05": "wpT3w2QWbkwEsBe",
		"29:06": "rqbc4nTivlgHsAg",
		"29:07": "rqbc4nTivlgHsAg",
		"29:08": "mbFkqanETTkTsSb",
		"29:09": "mbFkqanETTkTsSb",
		"29:10": "ctaaN1dJccITs",
		"29:11": "qx_vmZbh8BgHsGd",
		"29:12": "_kxwbilQIyAHsS",
		"29:13": "_kxwbilQIyAHsS",
		"29:14": "xbH1owYAz7ASgGa",
		"29:15": "BmNbZygqHpETsAl",
		"29:16": "BmNbZygqHpETsAl",
		"29:17": "v4T2xWgRZGwEsBe",
		"29:18": "lfd_gtrdgGgFlEu",
		"29:19": "lfd_gtrdgGgFlEu",
		"29:20": "1n-to3ahKtABhSb",
		"29:21": "vaHOFd-KStkHsS",
		"29:22": "vaHOFd-KStkHsS",
		"29:23": "xm_-EYgQvlcTsSc",
		"29:24": "xm_-EYgQvlcTsSc",
		"29:25": "rr3bYslx-ecTsSc",
		"29:26": "IqZlim_yowwHsS",
		"29:27": "IqZlim_yowwHsS",
		"29:28": "luA4GtJxE20FlEu",
		"29:29": "srScJAs2i1cOgB",
		"29:30": "srScJAs2i1cOgB",
		"29:31": "yTg1EPJa1_sSgBa",
		"29:32": "yTg1EPJa1_sSgBa",
		"29:33": "spvbAObyqwoOgSb",
		"29:34": "spvbAObyqwoOgSb",
		"29:35": "mf2keggHpycFlSm",
		"29:36": "kuAviEmmoP4SgBa",
		"29:37": "kuAviEmmoP4SgBa",
		"29:38": "-sdJ2JdtlGYTsSc",
		"29:39": "zmaRs5Q3gOwOgSb",
		"29:40": "AaGezzEkEagFlGa",
		"29:41": "aFuiJhcff3QTsSb",
		"29:42": "ozqlcZqtgrgFlEu",
		"29:43": "grefAhSvcvcOgTc",
		"29:44": "grefAhSvcvcOgTc",
		"29:45": "qSeotyOZEZAFlSc",
		"29:46": "qSeotyOZEZAFlSc",
		"29:47": "zfhna4WuxdcEsBe",
		"29:48": "-scOr4rmGNcSgBa",
		"29:49": "-scOr4rmGNcSgBa",
		"29:50": "qZb_rxOlRs4OgSb",
		"29:51": "qZb_rxOlRs4OgSb",
		"29:52": "ewdeEGoaANIHsB",
		"29:53": "ewdeEGoaANIHsB",
		"29:54": "tcl2oe1-pxIOgHe",
		"29:55": "tcl2oe1-pxIOgHe",
		"29:56": "v_QqpeRbc_kOgTi",
		"29:57": "v_QqpeRbc_kOgTi",
		"29:58": "mai_uYRTgxQTsSc",
		"29:59": "mai_uYRTgxQTsSc",
		"30:00": "oJ-Be8vJPbAThH",
		"30:01": "Rxgf2s-QJYATsSc",
		"30:02": "Rxgf2s-QJYATsSc",
		"30:03": "FG1QnwBBP2ETsFe",
		"30:04": "Qhoq_-Hl4gYSgGa",
		"30:05": "Qhoq_-Hl4gYSgGa",
		"30:06": "xHiBtaBuhI4HsH",
		"30:07": "y8jcgyBpnPoBiB",
		"30:08": "svb1JvgxAOwOgSb",
		"30:09": "svb1JvgxAOwOgSb",
		"30:10": "vlsSQwsjvEkOgTc",
		"30:11": "vlsSQwsjvEkOgTc",
		"30:12": "KhlBziyisdgFlY",
		"30:13": "BOoG1FoqynAHsAg",
		"30:14": "BOoG1FoqynAHsAg",
		"30:15": "fOqO2yiqnscOgTc",
		"30:16": "zQxixvjQBOYTsO",
		"30:17": "zQxixvjQBOYTsO",
		"30:18": "lAbStfySPlcOgO",
		"30:19": "lAbStfySPlcOgO",
		"30:20": "Q-BcAB3JeGkFmHo",
		"30:21": "xfvGpm-ERQUAt",
		"30:22": "wA1K5oRdsvkBhSb",
		"30:23": "pxImOyJq1x4FlHe",
		"30:24": "tArFzilwatwOgGe",
		"30:25": "tArFzilwatwOgGe",
		"30:26": "gycjSHbdwScOgSc",
		"30:27": "tcpplFkwSokOgSe",
		"30:28": "tcpplFkwSokOgSe",
		"30:29": "kpo_hmKhB3gFlY",
		"30:30": "wOvY-lq4TBETsO",
		"30:31": "wOvY-lq4TBETsO",
		"30:32": "wxkYqltzm_ATsSc",
		"30:33": "ckGupKeisQwBhSb",
		"30:34": "ckGupKeisQwBhSb",
		"30:35": "ANeyxntEQxQFmHo",
		"30:36": "ANeyxntEQxQFmHo",
		"30:37": "tHmlEylrO1ETsSb",
		"30:38": "xxabxIt2oowOgHe",
		"30:39": "xxabxIt2oowOgHe",
		"30:40": "fl4txxhlpFETsAg",
		"30:41": "xiuEx5pQkRcFlEu",
		"30:42": "aBmvxiP-PNwOgAl",
		"30:43": "dlmpmtHnnEIOgH",
		"30:44": "dlmpmtHnnEIOgH",
		"30:45": "Hh3BAyAjxkwHsEu",
		"30:46": "GwinnRsBQR4HsGd",
		"30:47": "GwinnRsBQR4HsGd",
		"30:48": "ooj4cOBSHaQFlAs",
		"30:49": "uuwsyqp-wwkFlEu",
		"30:50": "uuwsyqp-wwkFlEu",
		"30:51": "pAkjkG-E4dEFlEu",
		"30:52": "sssqc1QokncFlEu",
		"30:53": "Km-us_xvamYOgH",
		"30:54": "Km-us_xvamYOgH",
		"30:55": "aAwkEgIQvyoHsS",
		"30:56": "aAwkEgIQvyoHsS",
		"30:57": "mdNsjoQ-iO4SgBa",
		"30:58": "FKuObKhqQrAOgBe",
		"30:59": "FKuObKhqQrAOgBe",
		"31:00": "tPAjY_lZzYoBiH",
		"31:01": "ElanOZfZGsQOgSb",
		"31:02": "ElanOZfZGsQOgSb",
		"31:03": "pHiK4sAzeKcTsSc",
		"31:04": "pHiK4sAzeKcTsSc",
		"31:05": "v4wohAa-dPgBhSb",
		"31:06": "v4wohAa-dPgBhSb",
		"31:07": "KKawRlBeftEFlSc",
		"31:08": "kamyxB-yKrcFlTi",
		"31:09": "kamyxB-yKrcFlTi",
		"31:10": "bpnwRGpbhnoFlEu",
		"31:11": "bpnwRGpbhnoFlEu",
		"31:12": "j_E1_j0dHqkFlSm",
		"31:13": "ZPImchaxn2QHsH",
		"31:14": "-jyEahOy4TgOgSb",
		"31:15": "HyHGATyynmIOg",
		"31:16": "HyHGATyynmIOg",
		"31:17": "xPA5juzIEZsHsH",
		"31:18": "aHOmfbngyBsHsSb",
		"31:19": "aHOmfbngyBsHsSb",
		"31:20": "G3E1AjGw_PcSgBa",
		"31:21": "G3E1AjGw_PcSgBa",
		"31:22": "FEclp1gba1ETsAg",
		"31:23": "FEclp1gba1ETsAg",
		"31:24": "-1eKoQGjjhEBhSb",
		"31:25": "sugfhgIkwacHsS",
		"31:26": "sugfhgIkwacHsS",
		"31:27": "nxOjtihOl-sOgTc",
		"31:28": "ccNbsxeetdcOgSi",
		"31:29": "jqvFxJEJbtgTsSb",
		"31:30": "jqvFxJEJbtgTsSb",
		"31:31": "wbR4fJ_e_vwFlEu",
		"31:32": "QdGBr3yzaggHsSe",
		"31:33": "aJpljm-mziYTsSc",
		"31:34": "aJpljm-mziYTsSc",
		"31:35": "wHv_af-ScFwHsSe",
		"31:36": "xzBGEAdG-TgHsGd",
		"31:37": "xzBGEAdG-TgHsGd",
		"31:38": "rztcb-sbEE4FlEu",
		"31:39": "nilQjgsEGN4OgTe",
		"31:40": "qBOHvRQ3orEBhBa",
		"31:41": "qBOHvRQ3orEBhBa",
		"31:42": "uKnoo-s1c2IFmB",
		"31:43": "wQWygif5dckEsBe",
		"31:44": "wQWygif5dckEsBe",
		"31:45": "iQA0sfA3ZEcFlEu",
		"31:46": "I1sfslgQ_mwHsS",
		"31:47": "I1sfslgQ_mwHsS",
		"31:48": "IwJbb0tQq7sHsS",
		"31:49": "wune-PzwoQgSgBa",
		"31:50": "wune-PzwoQgSgBa",
		"31:51": "jOdkbOPiqsEFlGe",
		"31:52": "4jgoAfPWFzoAu",
		"31:53": "wrNAF5pbFNcFlGa",
		"31:54": "wrNAF5pbFNcFlGa",
		"31:55": "eEoSwgeBqhYTs",
		"31:56": "eEoSwgeBqhYTs",
		"31:57": "IqwzZwTyeyoHsS",
		"31:58": "wfnEO1E2hsUTa",
		"31:59": "FokvtHumQagFmHo",
		"32:00": "FokvtHumQagFmHo",
		"32:01": "cSZFdJfT-soOgSe",
		"32:02": "cSZFdJfT-soOgSe",
		"32:03": "uQRS-Jqp0oAOgTc",
		"32:04": "pkbkTTtmhhwFlEu",
		"32:05": "pkbkTTtmhhwFlEu",
		"32:06": "u_HcNlmOSwgHsAs",
		"32:07": "u_HcNlmOSwgHsAs",
		"32:08": "draqd3ETFPEFlY",
		"32:09": "SRjg_Aaq3bgOgTc",
		"32:10": "FzbQh-d4TtoTsSb",
		"32:11": "vqkcyp_tI-AHsS",
		"32:12": "vqkcyp_tI-AHsS",
		"32:13": "OwJngGTwn2oOgSb",
		"32:14": "p4qEHZlzHogHsH",
		"32:15": "p4qEHZlzHogHsH",
		"32:16": "ngOaItfq-6kFlHe",
		"32:17": "Ee-QEJndBJEHsGd",
		"32:18": "Ee-QEJndBJEHsGd",
		"32:19": "wZohsGGmtEkFlEu",
		"32:20": "wZohsGGmtEkFlEu",
		"32:21": "G3GEJpvkEmcFlEu",
		"32:22": "wcTxGTwceJoFlEu",
		"32:23": "wcTxGTwceJoFlEu",
		"32:24": "qbSJzHQYolsTsBe",
		"32:25": "k4pZg-Q_PHcOgTc",
		"32:26": "f1hqHvR3FdEFmHo",
		"32:27": "xrbuhOuTKFkHsAs",
		"32:28": "xrbuhOuTKFkHsAs",
		"32:29": "lrpmEejhTAwFlEu",
		"32:30": "HkthxdutBnAHsEu",
		"32:31": "um3_QAQcwP4SgBa",
		"32:32": "laaQdZbsGZEFlEu",
		"32:33": "laaQdZbsGZEFlEu",
		"32:34": "glZYGy2ouSEOgBe",
		"32:35": "glZYGy2ouSEOgBe",
		"32:36": "yEi3aKJdeO0OgGe",
		"32:37": "yEi3aKJdeO0OgGe",
		"32:38": "pbsnuJq1Wq4EsBe",
		"32:39": "pbsnuJq1Wq4EsBe",
		"32:40": "YshJBTypvEATsS",
		"32:41": "beKfByBlAhQTsGa",
		"32:42": "beKfByBlAhQTsGa",
		"32:43": "hfhY_BwB7fsHsS",
		"32:44": "QihseRRApI4HsS",
		"32:45": "QihseRRApI4HsS",
		"32:46": "y8nhcmwyoqQFlEu",
		"32:47": "q3dqiRpGgGsFlEu",
		"32:48": "q3dqiRpGgGsFlEu",
		"32:49": "j1tbcogawSQOgTc",
		"32:50": "yq0pt_Y_frkTsSc",
		"32:51": "zGgwahbqahUAt",
		"32:52": "zGgwahbqahUAt",
		"32:53": "ggRPnFuu-QsFlY",
		"32:54": "ggRPnFuu-QsFlY",
		"32:55": "_QhqbbmP4ucSgBa",
		"32:56": "_QhqbbmP4ucSgBa",
		"32:57": "ngf2GoEFJPEFlY",
		"32:58": "ngf2GoEFJPEFlY",
		"32:59": "uG_tQKQbjAYOgH",
		"33:00": "uG_tQKQbjAYOgH",
		"33:01": "wHJmcFvEnTAFmHo",
		"33:02": "NTocsiSFfysHsAs",
		"33:03": "NTocsiSFfysHsAs",
		"33:04": "-J_ihyPlOxwBhAg",
		"33:05": "rexKPqsy5vQTsFe",
		"33:06": "JmhZfYJSuqsOgBe",
		"33:07": "ncmiFPhxiroFlY",
		"33:08": "mauh_YQKhgEOgH",
		"33:09": "mauh_YQKhgEOgH",
		"33:10": "pj-B-SbpJiATsBe",
		"33:11": "pj-B-SbpJiATsBe",
		"33:12": "QyaGi1wYQgcTsSc",
		"33:13": "QyaGi1wYQgcTsSc",
		"33:14": "Nihjfvmx_soOgGa",
		"33:15": "_jaqSimTYjkHsS",
		"33:16": "uJTG2OQOl-wOgTc",
		"33:17": "uJTG2OQOl-wOgTc",
		"33:18": "nvu_IgvoGE4OgHe",
		"33:19": "xfp_n5TyrywFlEu",
		"33:20": "lTPPipSAenwOgF",
		"33:21": "lTPPipSAenwOgF",
		"33:22": "rrNat-3H-EwOgAg",
		"33:23": "rrNat-3H-EwOgAg",
		"33:24": "hTj2SGPkKtgOgF",
		"33:25": "kx_larKYpAQOgH",
		"33:26": "kx_larKYpAQOgH",
		"33:27": "slauSOa5-QwFlY",
		"33:28": "2v-_TGTklFQTsSb",
		"33:29": "2v-_TGTklFQTsSb",
		"33:30": "hnTGzYgumaIAt",
		"33:31": "tchOzeivZo0OgSb",
		"33:32": "lPlR-_ocdTQSgBa",
		"33:33": "wAxyheoixmcTsBa",
		"33:34": "wAxyheoixmcTsBa",
		"33:35": "wPp7jbuJOHoAtHe",
		"33:36": "wKq2kbqtf3ABhSb",
		"33:37": "HFtTSPjpj_cFlTi",
		"33:38": "HFtTSPjpj_cFlTi",
		"33:39": "wFvzs2P1hHQOgSe",
		"33:40": "wFvzs2P1hHQOgSe",
		"33:41": "ZebJ2PE1ztgSgBa",
		"33:42": "T_BtuitQh_wHsGd",
		"33:43": "T_BtuitQh_wHsGd",
		"33:44": "ry4Kkuxx4F0OgGa",
		"33:45": "YduEfbzpdOQTsAl",
		"33:46": "YduEfbzpdOQTsAl",
		"33:47": "dqdRKFgoPfcOgS",
		"33:48": "dqdRKFgoPfcOgS",
		"33:49": "bHmAqtibTiIFmH",
		"33:50": "ouYqANH8hlATsAl",
		"33:51": "y7UZHEHhdekBi",
		"33:52": "RopkEy-EycAFlEu",
		"33:53": "RopkEy-EycAFlEu",
		"33:54": "qBw1hEEqZS0TsY",
		"33:55": "xmg5axAQiywFlEu",
		"33:56": "xmg5axAQiywFlEu",
		"33:57": "plUsAQuaBZ0Hg",
		"33:58": "plUsAQuaBZ0Hg",
		"33:59": "hcB-w_3FHxQSgBa",
		"34:00": "hcB-w_3FHxQSgBa",
		"34:01": "Bs1HxF2zuzkSgBa",
		"34:02": "bnNI-cdxirQTs",
		"34:03": "ppAPdFagHzETsBe",
		"34:04": "ppAPdFagHzETsBe",
		"34:05": "aZgdFncg1ssTsSb",
		"34:06": "wfNJmNGcsEQBhBa",
		"34:07": "wfNJmNGcsEQBhBa",
		"34:08": "lucajYNfFc8OgBe",
		"34:09": "B6AQhpFkgfQBhBa",
		"34:10": "q4tGzHNuONQBhAg",
		"34:11": "q4tGzHNuONQBhAg",
		"34:12": "sKrdk4xwdBoFlTi",
		"34:13": "sKrdk4xwdBoFlTi",
		"34:14": "fx1do3YRPsEOgB",
		"34:15": "fx1do3YRPsEOgB",
		"34:16": "eFnlOA8-jdATsTc",
		"34:17": "OtA4AEl_KJkOgGe",
		"34:18": "OtA4AEl_KJkOgGe",
		"34:19": "u1AjQxdb3HcFlSm",
		"34:20": "u1AjQxdb3HcFlSm",
		"34:21": "dQKotAHphKETsSc",
		"34:22": "dQKotAHphKETsSc",
		"34:23": "fQQJr-tEaJEFlEu",
		"34:24": "ln0ff5dZe0cFlEu",
		"34:25": "wx3wr2ZrSYATlH",
		"34:26": "wx3wr2ZrSYATlH",
		"34:27": "vQRiJthf6a0FlEu",
		"34:28": "yw7AfY0fihAOgS",
		"34:29": "yw7AfY0fihAOgS",
		"34:30": "xj3b3_GpiusFlEu",
		"34:31": "wiGjv-aOlhEOgSb",
		"34:32": "wiGjv-aOlhEOgSb",
		"34:33": "IAfz1PcxAyoHsH",
		"34:34": "bdAxwEApy_QFlEu",
		"34:35": "bdAxwEApy_QFlEu",
		"34:36": "yuoq_YeIBxcHg",
		"34:37": "rTaE_HS_2ikAtHe",
		"34:38": "NP-bZmvOzhAFlAs",
		"34:39": "NP-bZmvOzhAFlAs",
		"34:40": "PBqjFihluagTsGa",
		"34:41": "PBqjFihluagTsGa",
		"34:42": "zNdQy3yyBgQHsBe",
		"34:43": "ougEbiPYG2cOgH",
		"34:44": "yn2bGA-nZAAFlEu",
		"34:45": "yn2bGA-nZAAFlEu",
		"34:46": "qqsZ_J3fm-AFlEu",
		"34:47": "Zf0lOv_ZIn4OgHe",
		"34:48": "ZAgZv10jIboOsH",
		"34:49": "gOqe2olOSucFlGa",
		"34:50": "gOqe2olOSucFlGa",
		"34:51": "ciZ0v8rGaboFlGe",
		"34:52": "ciZ0v8rGaboFlGe",
		"34:53": "xgwc4fsipJsFlEu",
		"34:54": "xgwc4fsipJsFlEu",
		"34:55": "k3Odpd3EFAETsTc",
		"34:56": "FS6cFHTI1ukAc",
		"34:57": "FS6cFHTI1ukAc",
		"34:58": "zOh06yNebocHsSb",
		"34:59": "zOh06yNebocHsSb",
		"35:00": "O-RRxsorbPgBhAg",
		"35:01": "ladYOoihTHkHsSc",
		"35:02": "ladYOoihTHkHsSc",
		"35:03": "IBElwAz3O5sBhBe",
		"35:04": "kS2sGozZxZcOgTc",
		"35:05": "PpzFEyFxtooOgFe",
		"35:06": "PpzFEyFxtooOgFe",
		"35:07": "rxTt2yY31csTsSc",
		"35:08": "wZmc7EgwfpcFlEu",
		"35:09": "wZmc7EgwfpcFlEu",
		"35:10": "YhBwhuqFqjwHsS",
		"35:11": "YhBwhuqFqjwHsS",
		"35:12": "hRp2iaks_fgFlEu",
		"35:13": "peGgwq7uJ_UAt",
		"35:14": "idhgcpHBvuoFmHo",
		"35:15": "idhgcpHBvuoFmHo",
		"35:16": "dfYKdPPxG_oAc",
		"35:17": "NNmy-vuwxrcBhBa",
		"35:18": "NNmy-vuwxrcBhBa",
		"35:19": "OEo_ug8EQbUOsH",
		"35:20": "SfkphhQtEysOgTc",
		"35:21": "SfkphhQtEysOgTc",
		"35:22": "vwrTyHPe2QEOgTc",
		"35:23": "geFJKtFisPATsO",
		"35:24": "geFJKtFisPATsO",
		"35:25": "zowrvPh6xcsSgBa",
		"35:26": "ukbiPBR2-GIFmBe",
		"35:27": "hW-ynfpmcj4EsBe",
		"35:28": "hW-ynfpmcj4EsBe",
		"35:29": "HArS1HmjruQHsAs",
		"35:30": "HArS1HmjruQHsAs",
		"35:31": "ediic2HnGcoHsGd",
		"35:32": "ediic2HnGcoHsGd",
		"35:33": "qQiwgEQNfQsOgTe",
		"35:34": "qQiwgEQNfQsOgTe",
		"35:35": "GGGrmu_cYtoTsSc",
		"35:36": "yZiWeGlNHugAm",
		"35:37": "GZFuHnwGZNcTsTc",
		"35:38": "GZFuHnwGZNcTsTc",
		"35:39": "swiSjPF_ii4SgGa",
		"35:40": "yn_lOfckS4oFlY",
		"35:41": "yn_lOfckS4oFlY",
		"35:42": "snNs6WeqtzwAmH",
		"35:43": "IlppNGAeafEHsB",
		"35:44": "nn_OOeNcPnwFlSc",
		"35:45": "nn_OOeNcPnwFlSc",
		"35:46": "4dK-BcpcnGwFlY",
		"35:47": "a3FJiyeRrewTsSb",
		"35:48": "a3FJiyeRrewTsSb",
		"35:49": "H4_TtauZHawHsHo",
		"35:50": "4kT-Ggvygc0FlEu",
		"35:51": "nGEO_aozx8wOgSb",
		"35:52": "nGEO_aozx8wOgSb",
		"35:53": "vgmYHte2GrsSgGa",
		"35:54": "vgmYHte2GrsSgGa",
		"35:55": "PsyZzsKcvicTsFe",
		"35:56": "PsyZzsKcvicTsFe",
		"35:57": "AiOzg_qNuT4SgBa",
		"35:58": "AiOzg_qNuT4SgBa",
		"35:59": "oOBPSkdqZZoTsS",
		"36:00": "oOBPSkdqZZoTsS",
		"36:01": "HO_uATipTtgHsSe",
		"36:02": "iA_liuSEKwkHsSe",
		"36:03": "iA_liuSEKwkHsSe",
		"36:04": "AbBF-faYffcOgHe",
		"36:05": "vzZH-OoHuyoFmHo",
		"36:06": "vzZH-OoHuyoFmHo",
		"36:07": "mir7GitnpuEFlEu",
		"36:08": "swcjch2KKIoAtH",
		"36:09": "swcjch2KKIoAtH",
		"36:10": "f-2EezHkGOsFm",
		"36:11": "f-2EezHkGOsFm",
		"36:12": "hPGtjxFKc50OgS",
		"36:13": "quk0P8dl_OYFlH",
		"36:14": "hNmFAeHOeBETsFe",
		"36:15": "hNmFAeHOeBETsFe",
		"36:16": "mvlwbkW-p0AEsBe",
		"36:17": "jsEhj-cjrPESgBa",
		"36:18": "jsEhj-cjrPESgBa",
		"36:19": "qtaQjlsquwcFlEu",
		"36:20": "qtaQjlsquwcFlEu",
	},
	fontSizes: [0, 1, 4, 9, 12, 16, 25, 28, 32, 36, 42, 49, 64, 81],
	fontFamily: ["Monospace", "Times New Roman", "Wingdings"],
}

let RULES = {}

let passwd = "",
	captcha,
	chessPuzzle,
	wordle

const passwrdBox = document.querySelector(".ProseMirror").childNodes[0]
const date = new Date();
const todayDate =`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`

function isNumeric(value) {
	return /^-?\d+$/.test(value)
}

function contains(word, letterList) {
	for (let i = 0; i < word.length; i++) {
		if (letterList.includes(word[i])) {
			return true
		}
	}
	return false
}

function convertTimeFormat(input) {
	const parts = input.split(" ")
	let minutes = "00"
	let seconds = "00"

	for (let i = 0; i < parts.length; i++) {
		if (parts[i] === "minute") {
			minutes = parts[i - 1]
		} else if (parts[i] === "second") {
			seconds = parts[i - 1]
		}
	}

	return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`
}

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
	if (request.url.includes("captchas")) {
		rule10(request.url)
	}
	if (request.url.includes("chess")) {
		rule16(request.url.split("chess/puzzle")[1].replace(".svg", ""))
	}
})

function setThePassword(
	existingPasswd,
	str,
	fontFace = "Monospace",
	fontSize = 28,
	fontWeight = "normal"
) {
	let newPasswrd = passwrdBox.innerHTML
	newPasswrd += "-----"
	passwd += "-----"
	for (let i in str) {
		let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
		if (contains(str[i], vowels)) {
			fontWeight = "bold"
		}
		passwd += str[i]
		newPasswrd += `<span style="font-family: ${fontFace}; font-size: ${fontSize}px">${
			fontWeight === "bold" ? `<strong>` : ""
		}${fontWeight === "italic" ? `<em>` : ""}${str[i]}${fontWeight === "bold" ? `</strong>` : ""}${
			fontWeight === "italic" ? `</em>` : ""
		}</span>`
	}
	passwrdBox.innerHTML = newPasswrd
}

function rule2() {
	setThePassword(passwd, "2000@")
}

function rule5() {
	const numbers = passwd.match(/\d/g).map(Number)
	const currentSum = numbers.reduce((acc, num) => acc + num, 0)

	if (currentSum === 25) {
		return null
	}
	if (currentSum < 25) {
		let balance = 25 - currentSum
		const numbersToAdd = []
		for (let i = 9; i >= 1; i--) {
			while (balance >= i) {
				numbersToAdd.push(i)
				balance -= i
			}
		}
		setThePassword(passwd, numbersToAdd)
	} else {
		let extras = currentSum - 25
		const allNumbers = passwd.split("-----")[3]
		console.log(allNumbers)
		let numberToBeReplaced = allNumbers[0]
		while (numberToBeReplaced < extras) {
			numberToBeReplaced = allNumbers[Math.floor(Math.random() * allNumbers.length)]
		}
		const numbertobereplacedwith = numberToBeReplaced - extras
		passwd = passwd.replace(numberToBeReplaced, numbertobereplacedwith)
		passwrdBox.innerHTML = passwrdBox.innerHTML.replace(numberToBeReplaced, numbertobereplacedwith)
	}
}

function rule6() {
	const months = ["february", "september", "october", "november"]
	const randomMonth = months[Math.floor(Math.random() * months.length)]
	setThePassword(passwd, randomMonth)
}

function rule7() {
	setThePassword(passwd, "XXXV")
}

function rule8() {
	const sponosrs = ["pepsi", "shell", "starbucks"]
	const randomSponsor = sponosrs[Math.floor(Math.random() * sponosrs.length)]
	setThePassword(passwd, randomSponsor)
}

function rule10(url) {
	let givenCaptcha = url.split("captchas/")[1].split(".")[0]
	let captchaCheck = true
	for (let i in givenCaptcha) {
		if (isNumeric(givenCaptcha[i])) {
			const captchaRefresh = document.querySelector(".captcha-refresh")
			captchaRefresh.click()
			captchaCheck = false
			break
		}
	}
	if (captchaCheck) {
		captcha = givenCaptcha
		setThePassword(passwd, captcha)
	}
}

async function rule11() {
	const date = new Date()
	const response = await fetch("https://neal.fun/api/password-game/wordle?date=" + todayDate)
	const data = await response.json()
	wordle = data.answer
	let capitalize = false
	let atomicIndex = []
	for (let i in wordle) {
		if (!helper.periodicTableKeys.includes(wordle[i].toUpperCase()) && !capitalize) {
			wordle = wordle.replace(wordle[i], wordle[i].toUpperCase())
			capitalize = true
			break
		} else {
			atomicIndex.push(helper.periodicTable[wordle[i]])
		}
	}
	if (!capitalize) {
		let min = Math.min(...atomicIndex)
		let index = atomicIndex.indexOf(min)
		wordle[index] = wordle[index].toUpperCase()
	}
	setThePassword(passwd, wordle)
}

function rule12() {
	let randomOnePeriodicTableKey =
		helper.periodicTableKeys[Math.floor(Math.random() * helper.periodicTableKeys.length)]

	while (
		randomOnePeriodicTableKey.includes("I") ||
		randomOnePeriodicTableKey.includes("V") ||
		randomOnePeriodicTableKey.includes("X") ||
		randomOnePeriodicTableKey.includes("L") ||
		randomOnePeriodicTableKey.includes("C") ||
		randomOnePeriodicTableKey.includes("D") ||
		randomOnePeriodicTableKey.includes("M")
	) {
		randomOnePeriodicTableKey =
			helper.periodicTableKeys[Math.floor(Math.random() * helper.periodicTableKeys.length)]
	}
	setThePassword(passwd, randomOnePeriodicTableKey)
}

function rule13() {
	const moonPhaseEmoji = getMoonPhaseEmoji()
	setThePassword(passwd, moonPhaseEmoji[0])
}

function rule14() {
	const url = document.querySelector(".geo-wrapper").firstChild.src
	if (!url) {
		rule14()
		return
	}
	const embedLinks = helper.geoLocatePuzzle.flatMap((e) => e.embed)
	const links = helper.geoLocatePuzzle.flatMap((e) => e.link)
	const titl = helper.geoLocatePuzzle.flatMap((e) => e.title)

	if (embedLinks.includes(url) || links.includes(url)) {
		let index = embedLinks.indexOf(url) || links.indexOf(url)
		let title = titl[index]
		setThePassword(passwd, title.trim().replace(" ", "").toLowerCase())
	}
}

function rule16(index) {
	index = parseInt(index)
	let chessPuzzle = helper.chessPuzzle[index]
	setThePassword(passwd, chessPuzzle)
}

function rule17() {
	setThePassword(passwd, "🥚")
}

function rule18() {
	let periodicTableSymbols = []
	let totalAtomicValue = 0
	for (let i in passwd) {
		const joined = passwd[i] + passwd[Number(i) + 1]
		if (helper.periodicTableKeys.includes(joined)) {
			periodicTableSymbols.push(joined)
			totalAtomicValue += helper.periodicTable[joined]
		} else {
			if (helper.periodicTableKeys.includes(passwd[i])) {
				periodicTableSymbols.push(passwd[i])
				totalAtomicValue += helper.periodicTable[passwd[i]]
			}
		}
	}
	// make it equal to 200
	console.log("TOTAL ATOMIC VALUE -", totalAtomicValue)
	console.log("PERIODIC TABLE SYMBOLS -", periodicTableSymbols)
	let difference = 200 - totalAtomicValue
	if (difference > 0) {
		while (difference >= 118) {
			difference -= 1
			setThePassword(passwd, "H")
			passwd += "H"
		}
		console.log("BALANCE -", difference)
		console.log(
			"VALUE -",
			helper.periodicTableKeys[difference - 1],
			helper.periodicTable[helper.periodicTableKeys[difference - 1]]
		)
		while (
			contains(helper.periodicTableKeys[difference - 1], ["I", "V", "X", "L", "C", "D", "M", "Z"])
		) {
			setThePassword(passwd, "H")
			passwd += "H"
			difference -= 1
		}
		setThePassword(passwd, helper.periodicTableKeys[difference - 1])
		passwd += helper.periodicTableKeys[difference - 1]
	} else {
		// remove the largest atomic value from the password until the total is less than 200
		let newPasswd = passwrdBox.innerHTML
		while (totalAtomicValue > 200) {
			let max = Math.max(...periodicTableSymbols.map((e) => helper.periodicTable[e]))
			let index = periodicTableSymbols.indexOf(max)
			passwd = passwd.replace(periodicTableSymbols[index], "")
			newPasswd = newPasswd.replace(periodicTableSymbols[index], "")
			totalAtomicValue -= max
		}
		passwrdBox.innerHTML = newPasswd
	}
}

function rule20() {
	passwrdBox.innerHTML = passwrdBox.innerHTML.replaceAll("🔥", "")
}

function rule21() {
	setThePassword(passwd, "🏋️‍♂️🏋️‍♂️🏋️‍♂️")
}

function rule22() {
	const templist = ["iamloved", "iamworthy", "iamenough"]
	const random = templist[Math.floor(Math.random() * templist.length)]
	setThePassword(passwd, random)
}

function rule23() {
	setThePassword(passwd, "🐛🐛🐛🐛")
	setInterval(() => {
		setThePassword(passwd, "🐛🐛🐛🐛")
	}, 1000 * 60)
}

function rule24() {
	const duration = document.querySelector(".rule-desc").innerText.split(" a ")[1].split(" long")[0]
	const time_str = convertTimeFormat(duration)
	const link = helper.ytLinks[time_str]
	if (!link) {
		console.log("RELOADDD")
		// window.location.reload();
		return
	}
	RULES.rule24 = true
	setThePassword(passwd, "https://youtu.be/" + link)
}

window.onload = () => {
	rule11()
	setInterval(() => {
		let rules = document.querySelectorAll(".rule-icon")
		rules.forEach((e) =>
			e.src.includes("error")
				? (RULES[e.parentNode.innerText.trim().replace(" ", "").replace("R", "r")] = false)
				: (RULES[e.parentNode.innerText.trim().replace(" ", "").replace("R", "r")] = true)
		)

		// console.log(RULES)

		for (let i in RULES) {
			if (!RULES[i]) {
				if (window[i] && i !== "rule10") {
					window[i]()
				}
			}
		}
	}, 1000)
}







(function () { 'use strict';

// shortcuts for easier to read formulas

var PI   = Math.PI,
    sin  = Math.sin,
    cos  = Math.cos,
    tan  = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad  = PI / 180;

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas


// date/time constants and conversions

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;

function toJulian(date) { return date.valueOf() / dayMs - 0.5 + J1970; }
function fromJulian(j)  { return new Date((j + 0.5 - J1970) * dayMs); }
function toDays(date)   { return toJulian(date) - J2000; }


// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function rightAscension(l, b) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
function declination(l, b)    { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

function azimuth(H, phi, dec)  { return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi)); }
function altitude(H, phi, dec) { return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H)); }

function siderealTime(d, lw) { return rad * (280.16 + 360.9856235 * d) - lw; }

function astroRefraction(h) {
    if (h < 0) // the following formula works for positive altitudes only.
        h = 0; // if h = -0.08901179 a div/0 would occur.

    // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
    return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
}

// general sun calculations

function solarMeanAnomaly(d) { return rad * (357.5291 + 0.98560028 * d); }

function eclipticLongitude(M) {

    var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
        P = rad * 102.9372; // perihelion of the Earth

    return M + C + P + PI;
}

function sunCoords(d) {

    var M = solarMeanAnomaly(d),
        L = eclipticLongitude(M);

    return {
        dec: declination(L, 0),
        ra: rightAscension(L, 0)
    };
}


var SunCalc = {};


// calculates sun position for a given date and latitude/longitude

SunCalc.getPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c  = sunCoords(d),
        H  = siderealTime(d, lw) - c.ra;

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: altitude(H, phi, c.dec)
    };
};


// sun times configuration (angle, morning name, evening name)

var times = SunCalc.times = [
    [-0.833, 'sunrise',       'sunset'      ],
    [  -0.3, 'sunriseEnd',    'sunsetStart' ],
    [    -6, 'dawn',          'dusk'        ],
    [   -12, 'nauticalDawn',  'nauticalDusk'],
    [   -18, 'nightEnd',      'night'       ],
    [     6, 'goldenHourEnd', 'goldenHour'  ]
];

// adds a custom time to the times config

SunCalc.addTime = function (angle, riseName, setName) {
    times.push([angle, riseName, setName]);
};


// calculations for sun times

var J0 = 0.0009;

function julianCycle(d, lw) { return Math.round(d - J0 - lw / (2 * PI)); }

function approxTransit(Ht, lw, n) { return J0 + (Ht + lw) / (2 * PI) + n; }
function solarTransitJ(ds, M, L)  { return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L); }

function hourAngle(h, phi, d) { return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d))); }
function observerAngle(height) { return -2.076 * Math.sqrt(height) / 60; }

// returns set time for the given sun altitude
function getSetJ(h, lw, phi, dec, n, M, L) {

    var w = hourAngle(h, phi, dec),
        a = approxTransit(w, lw, n);
    return solarTransitJ(a, M, L);
}


// calculates sun times for a given date, latitude/longitude, and, optionally,
// the observer height (in meters) relative to the horizon

SunCalc.getTimes = function (date, lat, lng, height) {

    height = height || 0;

    var lw = rad * -lng,
        phi = rad * lat,

        dh = observerAngle(height),

        d = toDays(date),
        n = julianCycle(d, lw),
        ds = approxTransit(0, lw, n),

        M = solarMeanAnomaly(ds),
        L = eclipticLongitude(M),
        dec = declination(L, 0),

        Jnoon = solarTransitJ(ds, M, L),

        i, len, time, h0, Jset, Jrise;


    var result = {
        solarNoon: fromJulian(Jnoon),
        nadir: fromJulian(Jnoon - 0.5)
    };

    for (i = 0, len = times.length; i < len; i += 1) {
        time = times[i];
        h0 = (time[0] + dh) * rad;

        Jset = getSetJ(h0, lw, phi, dec, n, M, L);
        Jrise = Jnoon - (Jset - Jnoon);

        result[time[1]] = fromJulian(Jrise);
        result[time[2]] = fromJulian(Jset);
    }

    return result;
};


// moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas

function moonCoords(d) { // geocentric ecliptic coordinates of the moon

    var L = rad * (218.316 + 13.176396 * d), // ecliptic longitude
        M = rad * (134.963 + 13.064993 * d), // mean anomaly
        F = rad * (93.272 + 13.229350 * d),  // mean distance

        l  = L + rad * 6.289 * sin(M), // longitude
        b  = rad * 5.128 * sin(F),     // latitude
        dt = 385001 - 20905 * cos(M);  // distance to the moon in km

    return {
        ra: rightAscension(l, b),
        dec: declination(l, b),
        dist: dt
    };
}

SunCalc.getMoonPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c = moonCoords(d),
        H = siderealTime(d, lw) - c.ra,
        h = altitude(H, phi, c.dec),
        // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        pa = atan(sin(H), tan(phi) * cos(c.dec) - sin(c.dec) * cos(H));

    h = h + astroRefraction(h); // altitude correction for refraction

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: h,
        distance: c.dist,
        parallacticAngle: pa
    };
};


// calculations for illumination parameters of the moon,
// based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
// Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.

SunCalc.getMoonIllumination = function (date) {

    var d = toDays(date || new Date()),
        s = sunCoords(d),
        m = moonCoords(d),

        sdist = 149598000, // distance from Earth to Sun in km

        phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)),
        inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi)),
        angle = atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec) -
                cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra));

    return {
        fraction: (1 + cos(inc)) / 2,
        phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
        angle: angle
    };
};


function hoursLater(date, h) {
    return new Date(date.valueOf() + h * dayMs / 24);
}

// calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article

SunCalc.getMoonTimes = function (date, lat, lng, inUTC) {
    var t = new Date(date);
    if (inUTC) t.setUTCHours(0, 0, 0, 0);
    else t.setHours(0, 0, 0, 0);

    var hc = 0.133 * rad,
        h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc,
        h1, h2, rise, set, a, b, xe, ye, d, roots, x1, x2, dx;

    // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)
    for (var i = 1; i <= 24; i += 2) {
        h1 = SunCalc.getMoonPosition(hoursLater(t, i), lat, lng).altitude - hc;
        h2 = SunCalc.getMoonPosition(hoursLater(t, i + 1), lat, lng).altitude - hc;

        a = (h0 + h2) / 2 - h1;
        b = (h2 - h0) / 2;
        xe = -b / (2 * a);
        ye = (a * xe + b) * xe + h1;
        d = b * b - 4 * a * h1;
        roots = 0;

        if (d >= 0) {
            dx = Math.sqrt(d) / (Math.abs(a) * 2);
            x1 = xe - dx;
            x2 = xe + dx;
            if (Math.abs(x1) <= 1) roots++;
            if (Math.abs(x2) <= 1) roots++;
            if (x1 < -1) x1 = x2;
        }

        if (roots === 1) {
            if (h0 < 0) rise = i + x1;
            else set = i + x1;

        } else if (roots === 2) {
            rise = i + (ye < 0 ? x2 : x1);
            set = i + (ye < 0 ? x1 : x2);
        }

        if (rise && set) break;

        h0 = h2;
    }

    var result = {};

    if (rise) result.rise = hoursLater(t, rise);
    if (set) result.set = hoursLater(t, set);

    if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;

    return result;
};


// export as Node module / AMD module / browser variable
if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = SunCalc;
else if (typeof define === 'function' && define.amd) define(SunCalc);
else window.SunCalc = SunCalc;

}());

var luxon = (function (t) {
	"use strict"
	function z(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n]
			;(r.enumerable = r.enumerable || !1),
				(r.configurable = !0),
				"value" in r && (r.writable = !0),
				Object.defineProperty(
					t,
					(function (t) {
						t = (function (t, e) {
							if ("object" != typeof t || null === t) return t
							var n = t[Symbol.toPrimitive]
							if (void 0 === n) return ("string" === e ? String : Number)(t)
							n = n.call(t, e || "default")
							if ("object" != typeof n) return n
							throw new TypeError("@@toPrimitive must return a primitive value.")
						})(t, "string")
						return "symbol" == typeof t ? t : String(t)
					})(r.key),
					r
				)
		}
	}
	function o(t, e, n) {
		e && z(t.prototype, e), n && z(t, n), Object.defineProperty(t, "prototype", { writable: !1 })
	}
	function s() {
		return (s = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n,
							r = arguments[e]
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
					}
					return t
			  }).apply(this, arguments)
	}
	function i(t, e) {
		;(t.prototype = Object.create(e.prototype)), A((t.prototype.constructor = t), e)
	}
	function j(t) {
		return (j = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t)
			  })(t)
	}
	function A(t, e) {
		return (A = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (t, e) {
					return (t.__proto__ = e), t
			  })(t, e)
	}
	function q(t, e, n) {
		return (q = (function () {
			if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
				if ("function" == typeof Proxy) return 1
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), 1
				} catch (t) {}
			}
		})()
			? Reflect.construct.bind()
			: function (t, e, n) {
					var r = [null]
					r.push.apply(r, e)
					e = new (Function.bind.apply(t, r))()
					return n && A(e, n.prototype), e
			  }).apply(null, arguments)
	}
	function _(t) {
		var n = "function" == typeof Map ? new Map() : void 0
		return (function (t) {
			if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t
			if ("function" != typeof t)
				throw new TypeError("Super expression must either be null or a function")
			if (void 0 !== n) {
				if (n.has(t)) return n.get(t)
				n.set(t, e)
			}
			function e() {
				return q(t, arguments, j(this).constructor)
			}
			return (
				(e.prototype = Object.create(t.prototype, {
					constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
				})),
				A(e, t)
			)
		})(t)
	}
	function U(t, e) {
		if (null == t) return {}
		for (var n, r = {}, i = Object.keys(t), o = 0; o < i.length; o++)
			(n = i[o]), 0 <= e.indexOf(n) || (r[n] = t[n])
		return r
	}
	function P(t, e) {
		;(null == e || e > t.length) && (e = t.length)
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
		return r
	}
	function H(t, e) {
		var n,
			r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
		if (r) return (r = r.call(t)).next.bind(r)
		if (
			Array.isArray(t) ||
			(r = (function (t, e) {
				var n
				if (t)
					return "string" == typeof t
						? P(t, e)
						: "Map" ===
								(n =
									"Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor
										? t.constructor.name
										: n) || "Set" === n
						? Array.from(t)
						: "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						? P(t, e)
						: void 0
			})(t)) ||
			(e && t && "number" == typeof t.length)
		)
			return (
				r && (t = r),
				(n = 0),
				function () {
					return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }
				}
			)
		throw new TypeError(
			"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		)
	}
	var e = (function (t) {
			function e() {
				return t.apply(this, arguments) || this
			}
			return i(e, t), e
		})(_(Error)),
		R = (function (e) {
			function t(t) {
				return e.call(this, "Invalid DateTime: " + t.toMessage()) || this
			}
			return i(t, e), t
		})(e),
		W = (function (e) {
			function t(t) {
				return e.call(this, "Invalid Interval: " + t.toMessage()) || this
			}
			return i(t, e), t
		})(e),
		J = (function (e) {
			function t(t) {
				return e.call(this, "Invalid Duration: " + t.toMessage()) || this
			}
			return i(t, e), t
		})(e),
		Y = (function (t) {
			function e() {
				return t.apply(this, arguments) || this
			}
			return i(e, t), e
		})(e),
		G = (function (e) {
			function t(t) {
				return e.call(this, "Invalid unit " + t) || this
			}
			return i(t, e), t
		})(e),
		u = (function (t) {
			function e() {
				return t.apply(this, arguments) || this
			}
			return i(e, t), e
		})(e),
		n = (function (t) {
			function e() {
				return t.call(this, "Zone is an abstract class") || this
			}
			return i(e, t), e
		})(e),
		e = "numeric",
		r = "short",
		a = "long",
		$ = { year: e, month: e, day: e },
		B = { year: e, month: r, day: e },
		Q = { year: e, month: r, day: e, weekday: r },
		K = { year: e, month: a, day: e },
		X = { year: e, month: a, day: e, weekday: a },
		tt = { hour: e, minute: e },
		et = { hour: e, minute: e, second: e },
		nt = { hour: e, minute: e, second: e, timeZoneName: r },
		rt = { hour: e, minute: e, second: e, timeZoneName: a },
		it = { hour: e, minute: e, hourCycle: "h23" },
		ot = { hour: e, minute: e, second: e, hourCycle: "h23" },
		at = { hour: e, minute: e, second: e, hourCycle: "h23", timeZoneName: r },
		ut = { hour: e, minute: e, second: e, hourCycle: "h23", timeZoneName: a },
		st = { year: e, month: e, day: e, hour: e, minute: e },
		ct = { year: e, month: e, day: e, hour: e, minute: e, second: e },
		lt = { year: e, month: r, day: e, hour: e, minute: e },
		ft = { year: e, month: r, day: e, hour: e, minute: e, second: e },
		dt = { year: e, month: r, day: e, weekday: r, hour: e, minute: e },
		ht = { year: e, month: a, day: e, hour: e, minute: e, timeZoneName: r },
		mt = { year: e, month: a, day: e, hour: e, minute: e, second: e, timeZoneName: r },
		yt = { year: e, month: a, day: e, weekday: a, hour: e, minute: e, timeZoneName: a },
		vt = { year: e, month: a, day: e, weekday: a, hour: e, minute: e, second: e, timeZoneName: a },
		c = (function () {
			function t() {}
			var e = t.prototype
			return (
				(e.offsetName = function (t, e) {
					throw new n()
				}),
				(e.formatOffset = function (t, e) {
					throw new n()
				}),
				(e.offset = function (t) {
					throw new n()
				}),
				(e.equals = function (t) {
					throw new n()
				}),
				o(t, [
					{
						key: "type",
						get: function () {
							throw new n()
						},
					},
					{
						key: "name",
						get: function () {
							throw new n()
						},
					},
					{
						key: "ianaName",
						get: function () {
							return this.name
						},
					},
					{
						key: "isUniversal",
						get: function () {
							throw new n()
						},
					},
					{
						key: "isValid",
						get: function () {
							throw new n()
						},
					},
				]),
				t
			)
		})(),
		pt = null,
		gt = (function (t) {
			function e() {
				return t.apply(this, arguments) || this
			}
			i(e, t)
			var n = e.prototype
			return (
				(n.offsetName = function (t, e) {
					return te(t, e.format, e.locale)
				}),
				(n.formatOffset = function (t, e) {
					return ie(this.offset(t), e)
				}),
				(n.offset = function (t) {
					return -new Date(t).getTimezoneOffset()
				}),
				(n.equals = function (t) {
					return "system" === t.type
				}),
				o(
					e,
					[
						{
							key: "type",
							get: function () {
								return "system"
							},
						},
						{
							key: "name",
							get: function () {
								return new Intl.DateTimeFormat().resolvedOptions().timeZone
							},
						},
						{
							key: "isUniversal",
							get: function () {
								return !1
							},
						},
						{
							key: "isValid",
							get: function () {
								return !0
							},
						},
					],
					[
						{
							key: "instance",
							get: function () {
								return (pt = null === pt ? new e() : pt)
							},
						},
					]
				),
				e
			)
		})(c),
		wt = {}
	var kt = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 }
	var bt = {},
		f = (function (n) {
			function r(t) {
				var e = n.call(this) || this
				return (e.zoneName = t), (e.valid = r.isValidZone(t)), e
			}
			i(r, n),
				(r.create = function (t) {
					return bt[t] || (bt[t] = new r(t)), bt[t]
				}),
				(r.resetCache = function () {
					;(bt = {}), (wt = {})
				}),
				(r.isValidSpecifier = function (t) {
					return this.isValidZone(t)
				}),
				(r.isValidZone = function (t) {
					if (!t) return !1
					try {
						return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0
					} catch (t) {
						return !1
					}
				})
			var t = r.prototype
			return (
				(t.offsetName = function (t, e) {
					return te(t, e.format, e.locale, this.name)
				}),
				(t.formatOffset = function (t, e) {
					return ie(this.offset(t), e)
				}),
				(t.offset = function (t) {
					var e,
						n,
						r,
						i,
						o,
						a,
						u,
						s,
						t = new Date(t)
					return isNaN(t)
						? NaN
						: ((i = this.name),
						  wt[i] ||
								(wt[i] = new Intl.DateTimeFormat("en-US", {
									hour12: !1,
									timeZone: i,
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
									era: "short",
								})),
						  (a = (i = (i = wt[i]).formatToParts
								? (function (t, e) {
										for (var n = t.formatToParts(e), r = [], i = 0; i < n.length; i++) {
											var o = n[i],
												a = o.type,
												o = o.value,
												u = kt[a]
											"era" === a ? (r[u] = o) : b(u) || (r[u] = parseInt(o, 10))
										}
										return r
								  })(i, t)
								: ((o = t),
								  (i = (i = i).format(o).replace(/\u200E/g, "")),
								  (i = (o = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i))[1]),
								  (a = o[2]),
								  [o[3], i, a, o[4], o[5], o[6], o[7]]))[0]),
						  (o = i[1]),
						  (e = i[2]),
						  (n = i[3]),
						  (u = i[4]),
						  (r = i[5]),
						  (i = i[6]),
						  (u = 24 === u ? 0 : u),
						  (s = (t = +t) % 1e3),
						  (Qt({
								year: (a = "BC" === n ? 1 - Math.abs(a) : a),
								month: o,
								day: e,
								hour: u,
								minute: r,
								second: i,
								millisecond: 0,
						  }) -
								(t -= 0 <= s ? s : 1e3 + s)) /
								6e4)
				}),
				(t.equals = function (t) {
					return "iana" === t.type && t.name === this.name
				}),
				o(r, [
					{
						key: "type",
						get: function () {
							return "iana"
						},
					},
					{
						key: "name",
						get: function () {
							return this.zoneName
						},
					},
					{
						key: "isUniversal",
						get: function () {
							return !1
						},
					},
					{
						key: "isValid",
						get: function () {
							return this.valid
						},
					},
				]),
				r
			)
		})(c),
		Tt = ["base"],
		Ot = ["padTo", "floor"],
		St = {}
	var Nt = {}
	function Mt(t, e) {
		void 0 === e && (e = {})
		var n = JSON.stringify([t, e]),
			r = Nt[n]
		return r || ((r = new Intl.DateTimeFormat(t, e)), (Nt[n] = r)), r
	}
	var Dt = {}
	var Et = {}
	var Vt = null
	function It(t, e, n, r) {
		t = t.listingMode()
		return "error" === t ? null : ("en" === t ? n : r)(e)
	}
	var xt = (function () {
			function t(t, e, n) {
				;(this.padTo = n.padTo || 0), (this.floor = n.floor || !1), n.padTo, n.floor
				var r = U(n, Ot)
				;(!e || 0 < Object.keys(r).length) &&
					((e = s({ useGrouping: !1 }, n)),
					0 < n.padTo && (e.minimumIntegerDigits = n.padTo),
					(this.inf =
						((r = t),
						void 0 === (n = e) && (n = {}),
						(t = JSON.stringify([r, n])),
						(e = Dt[t]) || ((e = new Intl.NumberFormat(r, n)), (Dt[t] = e)),
						e)))
			}
			return (
				(t.prototype.format = function (t) {
					var e
					return this.inf
						? ((e = this.floor ? Math.floor(t) : t), this.inf.format(e))
						: l(this.floor ? Math.floor(t) : Yt(t, 3), this.padTo)
				}),
				t
			)
		})(),
		Ct = (function () {
			function t(t, e, n) {
				this.opts = n
				var n = (this.originalZone = void 0),
					r =
						(this.opts.timeZone
							? (this.dt = t)
							: "fixed" === t.zone.type
							? ((r = 0 <= (r = (t.offset / 60) * -1) ? "Etc/GMT+" + r : "Etc/GMT" + r),
							  0 !== t.offset && f.create(r).valid
									? ((n = r), (this.dt = t))
									: ((n = "UTC"),
									  (this.dt = 0 === t.offset ? t : t.setZone("UTC").plus({ minutes: t.offset })),
									  (this.originalZone = t.zone)))
							: "system" === t.zone.type
							? (this.dt = t)
							: "iana" === t.zone.type
							? (n = (this.dt = t).zone.name)
							: ((this.dt = t.setZone((n = "UTC")).plus({ minutes: t.offset })),
							  (this.originalZone = t.zone)),
						s({}, this.opts))
				;(r.timeZone = r.timeZone || n), (this.dtf = Mt(e, r))
			}
			var e = t.prototype
			return (
				(e.format = function () {
					return this.originalZone
						? this.formatToParts()
								.map(function (t) {
									return t.value
								})
								.join("")
						: this.dtf.format(this.dt.toJSDate())
				}),
				(e.formatToParts = function () {
					var e = this,
						t = this.dtf.formatToParts(this.dt.toJSDate())
					return this.originalZone
						? t.map(function (t) {
								return "timeZoneName" === t.type
									? s({}, t, {
											value: e.originalZone.offsetName(e.dt.ts, {
												locale: e.dt.locale,
												format: e.opts.timeZoneName,
											}),
									  })
									: t
						  })
						: t
				}),
				(e.resolvedOptions = function () {
					return this.dtf.resolvedOptions()
				}),
				t
			)
		})(),
		Zt = (function () {
			function t(t, e, n) {
				var r
				;(this.opts = s({ style: "long" }, n)),
					!e &&
						Rt() &&
						(this.rtf =
							((e = t),
							(n = t = void 0 === (t = n) ? {} : t).base,
							(n = U((n = t), Tt)),
							(n = JSON.stringify([e, n])),
							(r = Et[n]) || ((r = new Intl.RelativeTimeFormat(e, t)), (Et[n] = r)),
							r))
			}
			var e = t.prototype
			return (
				(e.format = function (t, e) {
					if (this.rtf) return this.rtf.format(t, e)
					var n = e,
						e = t,
						t = this.opts.numeric,
						r = "long" !== this.opts.style,
						i =
							(void 0 === t && (t = "always"),
							void 0 === r && (r = !1),
							{
								years: ["year", "yr."],
								quarters: ["quarter", "qtr."],
								months: ["month", "mo."],
								weeks: ["week", "wk."],
								days: ["day", "day", "days"],
								hours: ["hour", "hr."],
								minutes: ["minute", "min."],
								seconds: ["second", "sec."],
							}),
						o = -1 === ["hours", "minutes", "seconds"].indexOf(n)
					if ("auto" === t && o) {
						var a = "days" === n
						switch (e) {
							case 1:
								return a ? "tomorrow" : "next " + i[n][0]
							case -1:
								return a ? "yesterday" : "last " + i[n][0]
							case 0:
								return a ? "today" : "this " + i[n][0]
						}
					}
					var t = Object.is(e, -0) || e < 0,
						e = 1 === (o = Math.abs(e)),
						u = i[n],
						r = r ? (!e && u[2]) || u[1] : e ? i[n][0] : n
					return t ? o + " " + r + " ago" : "in " + o + " " + r
				}),
				(e.formatToParts = function (t, e) {
					return this.rtf ? this.rtf.formatToParts(t, e) : []
				}),
				t
			)
		})(),
		g = (function () {
			function i(t, e, n, r) {
				var t = (function (e) {
						var n = e.indexOf("-x-")
						if (-1 === (n = (e = -1 !== n ? e.substring(0, n) : e).indexOf("-u-"))) return [e]
						try {
							;(r = Mt(e).resolvedOptions()), (i = e)
						} catch (t) {
							var e = e.substring(0, n),
								r = Mt(e).resolvedOptions(),
								i = e
						}
						return [i, (n = r).numberingSystem, n.calendar]
					})(t),
					i = t[0],
					o = t[1],
					t = t[2]
				;(this.locale = i),
					(this.numberingSystem = e || o || null),
					(this.outputCalendar = n || t || null),
					(this.intl =
						((i = this.locale),
						(e = this.numberingSystem),
						((o = this.outputCalendar) || e) &&
							(i.includes("-u-") || (i += "-u"), o && (i += "-ca-" + o), e) &&
							(i += "-nu-" + e),
						i)),
					(this.weekdaysCache = { format: {}, standalone: {} }),
					(this.monthsCache = { format: {}, standalone: {} }),
					(this.meridiemCache = null),
					(this.eraCache = {}),
					(this.specifiedLocale = r),
					(this.fastNumbersCached = null)
			}
			;(i.fromOpts = function (t) {
				return i.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN)
			}),
				(i.create = function (t, e, n, r) {
					void 0 === r && (r = !1)
					t = t || k.defaultLocale
					return new i(
						t || (r ? "en-US" : (Vt = Vt || new Intl.DateTimeFormat().resolvedOptions().locale)),
						e || k.defaultNumberingSystem,
						n || k.defaultOutputCalendar,
						t
					)
				}),
				(i.resetCache = function () {
					;(Vt = null), (Nt = {}), (Dt = {}), (Et = {})
				}),
				(i.fromObject = function (t) {
					var t = void 0 === t ? {} : t,
						e = t.locale,
						n = t.numberingSystem,
						t = t.outputCalendar
					return i.create(e, n, t)
				})
			var t = i.prototype
			return (
				(t.listingMode = function () {
					var t = this.isEnglish(),
						e = !(
							(null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
							(null !== this.outputCalendar && "gregory" !== this.outputCalendar)
						)
					return t && e ? "en" : "intl"
				}),
				(t.clone = function (t) {
					return t && 0 !== Object.getOwnPropertyNames(t).length
						? i.create(
								t.locale || this.specifiedLocale,
								t.numberingSystem || this.numberingSystem,
								t.outputCalendar || this.outputCalendar,
								t.defaultToEN || !1
						  )
						: this
				}),
				(t.redefaultToEN = function (t) {
					return this.clone(s({}, (t = void 0 === t ? {} : t), { defaultToEN: !0 }))
				}),
				(t.redefaultToSystem = function (t) {
					return this.clone(s({}, (t = void 0 === t ? {} : t), { defaultToEN: !1 }))
				}),
				(t.months = function (n, r) {
					var i = this
					return (
						void 0 === r && (r = !1),
						It(this, n, ce, function () {
							var e = r ? { month: n, day: "numeric" } : { month: n },
								t = r ? "format" : "standalone"
							return (
								i.monthsCache[t][n] ||
									(i.monthsCache[t][n] = (function (t) {
										for (var e = [], n = 1; n <= 12; n++) {
											var r = L.utc(2009, n, 1)
											e.push(t(r))
										}
										return e
									})(function (t) {
										return i.extract(t, e, "month")
									})),
								i.monthsCache[t][n]
							)
						})
					)
				}),
				(t.weekdays = function (n, r) {
					var i = this
					return (
						void 0 === r && (r = !1),
						It(this, n, he, function () {
							var e = r
									? { weekday: n, year: "numeric", month: "long", day: "numeric" }
									: { weekday: n },
								t = r ? "format" : "standalone"
							return (
								i.weekdaysCache[t][n] ||
									(i.weekdaysCache[t][n] = (function (t) {
										for (var e = [], n = 1; n <= 7; n++) {
											var r = L.utc(2016, 11, 13 + n)
											e.push(t(r))
										}
										return e
									})(function (t) {
										return i.extract(t, e, "weekday")
									})),
								i.weekdaysCache[t][n]
							)
						})
					)
				}),
				(t.meridiems = function () {
					var n = this
					return It(
						this,
						void 0,
						function () {
							return me
						},
						function () {
							var e
							return (
								n.meridiemCache ||
									((e = { hour: "numeric", hourCycle: "h12" }),
									(n.meridiemCache = [L.utc(2016, 11, 13, 9), L.utc(2016, 11, 13, 19)].map(
										function (t) {
											return n.extract(t, e, "dayperiod")
										}
									))),
								n.meridiemCache
							)
						}
					)
				}),
				(t.eras = function (t) {
					var n = this
					return It(this, t, ge, function () {
						var e = { era: t }
						return (
							n.eraCache[t] ||
								(n.eraCache[t] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map(function (t) {
									return n.extract(t, e, "era")
								})),
							n.eraCache[t]
						)
					})
				}),
				(t.extract = function (t, e, n) {
					t = this.dtFormatter(t, e)
						.formatToParts()
						.find(function (t) {
							return t.type.toLowerCase() === n
						})
					return t ? t.value : null
				}),
				(t.numberFormatter = function (t) {
					return new xt(this.intl, (t = void 0 === t ? {} : t).forceSimple || this.fastNumbers, t)
				}),
				(t.dtFormatter = function (t, e) {
					return new Ct(t, this.intl, (e = void 0 === e ? {} : e))
				}),
				(t.relFormatter = function (t) {
					return void 0 === t && (t = {}), new Zt(this.intl, this.isEnglish(), t)
				}),
				(t.listFormatter = function (t) {
					return (
						void 0 === t && (t = {}),
						(e = this.intl),
						void 0 === (t = t) && (t = {}),
						(n = JSON.stringify([e, t])),
						(r = St[n]) || ((r = new Intl.ListFormat(e, t)), (St[n] = r)),
						r
					)
					var e, n, r
				}),
				(t.isEnglish = function () {
					return (
						"en" === this.locale ||
						"en-us" === this.locale.toLowerCase() ||
						new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
					)
				}),
				(t.equals = function (t) {
					return (
						this.locale === t.locale &&
						this.numberingSystem === t.numberingSystem &&
						this.outputCalendar === t.outputCalendar
					)
				}),
				o(i, [
					{
						key: "fastNumbers",
						get: function () {
							var t
							return (
								null == this.fastNumbersCached &&
									(this.fastNumbersCached =
										(!(t = this).numberingSystem || "latn" === t.numberingSystem) &&
										("latn" === t.numberingSystem ||
											!t.locale ||
											t.locale.startsWith("en") ||
											"latn" ===
												new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)),
								this.fastNumbersCached
							)
						},
					},
				]),
				i
			)
		})(),
		Ft = null,
		d = (function (n) {
			function e(t) {
				var e = n.call(this) || this
				return (e.fixed = t), e
			}
			i(e, n),
				(e.instance = function (t) {
					return 0 === t ? e.utcInstance : new e(t)
				}),
				(e.parseSpecifier = function (t) {
					if (t) {
						t = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
						if (t) return new e(ee(t[1], t[2]))
					}
					return null
				})
			var t = e.prototype
			return (
				(t.offsetName = function () {
					return this.name
				}),
				(t.formatOffset = function (t, e) {
					return ie(this.fixed, e)
				}),
				(t.offset = function () {
					return this.fixed
				}),
				(t.equals = function (t) {
					return "fixed" === t.type && t.fixed === this.fixed
				}),
				o(
					e,
					[
						{
							key: "type",
							get: function () {
								return "fixed"
							},
						},
						{
							key: "name",
							get: function () {
								return 0 === this.fixed ? "UTC" : "UTC" + ie(this.fixed, "narrow")
							},
						},
						{
							key: "ianaName",
							get: function () {
								return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + ie(-this.fixed, "narrow")
							},
						},
						{
							key: "isUniversal",
							get: function () {
								return !0
							},
						},
						{
							key: "isValid",
							get: function () {
								return !0
							},
						},
					],
					[
						{
							key: "utcInstance",
							get: function () {
								return (Ft = null === Ft ? new e(0) : Ft)
							},
						},
					]
				),
				e
			)
		})(c),
		Lt = (function (n) {
			function t(t) {
				var e = n.call(this) || this
				return (e.zoneName = t), e
			}
			i(t, n)
			var e = t.prototype
			return (
				(e.offsetName = function () {
					return null
				}),
				(e.formatOffset = function () {
					return ""
				}),
				(e.offset = function () {
					return NaN
				}),
				(e.equals = function () {
					return !1
				}),
				o(t, [
					{
						key: "type",
						get: function () {
							return "invalid"
						},
					},
					{
						key: "name",
						get: function () {
							return this.zoneName
						},
					},
					{
						key: "isUniversal",
						get: function () {
							return !1
						},
					},
					{
						key: "isValid",
						get: function () {
							return !1
						},
					},
				]),
				t
			)
		})(c)
	function w(t, e) {
		var n
		return b(t) || null === t
			? e
			: t instanceof c
			? t
			: "string" == typeof t
			? "default" === (n = t.toLowerCase())
				? e
				: "local" === n || "system" === n
				? gt.instance
				: "utc" === n || "gmt" === n
				? d.utcInstance
				: d.parseSpecifier(n) || f.create(t)
			: y(t)
			? d.instance(t)
			: "object" == typeof t && "offset" in t && "function" == typeof t.offset
			? t
			: new Lt(t)
	}
	var zt,
		jt = function () {
			return Date.now()
		},
		At = "system",
		qt = null,
		_t = null,
		Ut = null,
		Pt = 60,
		k = (function () {
			function t() {}
			return (
				(t.resetCaches = function () {
					g.resetCache(), f.resetCache()
				}),
				o(t, null, [
					{
						key: "now",
						get: function () {
							return jt
						},
						set: function (t) {
							jt = t
						},
					},
					{
						key: "defaultZone",
						get: function () {
							return w(At, gt.instance)
						},
						set: function (t) {
							At = t
						},
					},
					{
						key: "defaultLocale",
						get: function () {
							return qt
						},
						set: function (t) {
							qt = t
						},
					},
					{
						key: "defaultNumberingSystem",
						get: function () {
							return _t
						},
						set: function (t) {
							_t = t
						},
					},
					{
						key: "defaultOutputCalendar",
						get: function () {
							return Ut
						},
						set: function (t) {
							Ut = t
						},
					},
					{
						key: "twoDigitCutoffYear",
						get: function () {
							return Pt
						},
						set: function (t) {
							Pt = t % 100
						},
					},
					{
						key: "throwOnInvalid",
						get: function () {
							return zt
						},
						set: function (t) {
							zt = t
						},
					},
				]),
				t
			)
		})()
	function b(t) {
		return void 0 === t
	}
	function y(t) {
		return "number" == typeof t
	}
	function Ht(t) {
		return "number" == typeof t && t % 1 == 0
	}
	function Rt() {
		try {
			return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
		} catch (t) {
			return !1
		}
	}
	function Wt(t, n, r) {
		if (0 !== t.length)
			return t.reduce(function (t, e) {
				e = [n(e), e]
				return t && r(t[0], e[0]) === t[0] ? t : e
			}, null)[1]
	}
	function h(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}
	function T(t, e, n) {
		return Ht(t) && e <= t && t <= n
	}
	function l(t, e) {
		void 0 === e && (e = 2)
		t = t < 0 ? "-" + ("" + -t).padStart(e, "0") : ("" + t).padStart(e, "0")
		return t
	}
	function m(t) {
		if (!b(t) && null !== t && "" !== t) return parseInt(t, 10)
	}
	function v(t) {
		if (!b(t) && null !== t && "" !== t) return parseFloat(t)
	}
	function Jt(t) {
		if (!b(t) && null !== t && "" !== t) return (t = 1e3 * parseFloat("0." + t)), Math.floor(t)
	}
	function Yt(t, e, n) {
		void 0 === n && (n = !1)
		e = Math.pow(10, e)
		return (n ? Math.trunc : Math.round)(t * e) / e
	}
	function Gt(t) {
		return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0)
	}
	function $t(t) {
		return Gt(t) ? 366 : 365
	}
	function Bt(t, e) {
		var n,
			r = (r = e - 1) - (n = 12) * Math.floor(r / n) + 1
		return 2 == r
			? Gt(t + (e - r) / 12)
				? 29
				: 28
			: [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1]
	}
	function Qt(t) {
		var e = Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second, t.millisecond)
		return (
			t.year < 100 && 0 <= t.year && (e = new Date(e)).setUTCFullYear(t.year, t.month - 1, t.day),
			+e
		)
	}
	function Kt(t) {
		var e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7,
			t = t - 1,
			t = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7
		return 4 == e || 3 == t ? 53 : 52
	}
	function Xt(t) {
		return 99 < t ? t : t > k.twoDigitCutoffYear ? 1900 + t : 2e3 + t
	}
	function te(t, e, n, r) {
		void 0 === r && (r = null)
		var t = new Date(t),
			i = {
				hourCycle: "h23",
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
			},
			r = (r && (i.timeZone = r), s({ timeZoneName: e }, i)),
			e = new Intl.DateTimeFormat(n, r).formatToParts(t).find(function (t) {
				return "timezonename" === t.type.toLowerCase()
			})
		return e ? e.value : null
	}
	function ee(t, e) {
		;(t = parseInt(t, 10)), Number.isNaN(t) && (t = 0), (e = parseInt(e, 10) || 0)
		return 60 * t + (t < 0 || Object.is(t, -0) ? -e : e)
	}
	function ne(t) {
		var e = Number(t)
		if ("boolean" == typeof t || "" === t || Number.isNaN(e)) throw new u("Invalid unit value " + t)
		return e
	}
	function re(t, e) {
		var n,
			r,
			i = {}
		for (n in t) h(t, n) && null != (r = t[n]) && (i[e(n)] = ne(r))
		return i
	}
	function ie(t, e) {
		var n = Math.trunc(Math.abs(t / 60)),
			r = Math.trunc(Math.abs(t % 60)),
			i = 0 <= t ? "+" : "-"
		switch (e) {
			case "short":
				return i + l(n, 2) + ":" + l(r, 2)
			case "narrow":
				return i + n + (0 < r ? ":" + r : "")
			case "techie":
				return i + l(n, 2) + l(r, 2)
			default:
				throw new RangeError("Value format " + e + " is out of range for property format")
		}
	}
	function oe(t) {
		return (
			(n = t),
			["hour", "minute", "second", "millisecond"].reduce(function (t, e) {
				return (t[e] = n[e]), t
			}, {})
		)
		var n
	}
	var ae = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		ue = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		se = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
	function ce(t) {
		switch (t) {
			case "narrow":
				return [].concat(se)
			case "short":
				return [].concat(ue)
			case "long":
				return [].concat(ae)
			case "numeric":
				return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
			case "2-digit":
				return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
			default:
				return null
		}
	}
	var le = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		fe = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		de = ["M", "T", "W", "T", "F", "S", "S"]
	function he(t) {
		switch (t) {
			case "narrow":
				return [].concat(de)
			case "short":
				return [].concat(fe)
			case "long":
				return [].concat(le)
			case "numeric":
				return ["1", "2", "3", "4", "5", "6", "7"]
			default:
				return null
		}
	}
	var me = ["AM", "PM"],
		ye = ["Before Christ", "Anno Domini"],
		ve = ["BC", "AD"],
		pe = ["B", "A"]
	function ge(t) {
		switch (t) {
			case "narrow":
				return [].concat(pe)
			case "short":
				return [].concat(ve)
			case "long":
				return [].concat(ye)
			default:
				return null
		}
	}
	function we(t, e) {
		for (var n = "", r = H(t); !(i = r()).done; ) {
			var i = i.value
			i.literal ? (n += i.val) : (n += e(i.val))
		}
		return n
	}
	var ke = {
			D: $,
			DD: B,
			DDD: K,
			DDDD: X,
			t: tt,
			tt: et,
			ttt: nt,
			tttt: rt,
			T: it,
			TT: ot,
			TTT: at,
			TTTT: ut,
			f: st,
			ff: lt,
			fff: ht,
			ffff: yt,
			F: ct,
			FF: ft,
			FFF: mt,
			FFFF: vt,
		},
		O = (function () {
			function d(t, e) {
				;(this.opts = e), (this.loc = t), (this.systemLoc = null)
			}
			;(d.create = function (t, e) {
				return new d(t, (e = void 0 === e ? {} : e))
			}),
				(d.parseFormat = function (t) {
					for (var e = null, n = "", r = !1, i = [], o = 0; o < t.length; o++) {
						var a = t.charAt(o)
						"'" === a
							? (0 < n.length && i.push({ literal: r || /^\s+$/.test(n), val: n }),
							  (e = null),
							  (n = ""),
							  (r = !r))
							: r || a === e
							? (n += a)
							: (0 < n.length && i.push({ literal: /^\s+$/.test(n), val: n }), (e = n = a))
					}
					return 0 < n.length && i.push({ literal: r || /^\s+$/.test(n), val: n }), i
				}),
				(d.macroTokenToFormatOpts = function (t) {
					return ke[t]
				})
			var t = d.prototype
			return (
				(t.formatWithSystemDefault = function (t, e) {
					return (
						null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()),
						this.systemLoc.dtFormatter(t, s({}, this.opts, e)).format()
					)
				}),
				(t.dtFormatter = function (t, e) {
					return this.loc.dtFormatter(t, s({}, this.opts, (e = void 0 === e ? {} : e)))
				}),
				(t.formatDateTime = function (t, e) {
					return this.dtFormatter(t, e).format()
				}),
				(t.formatDateTimeParts = function (t, e) {
					return this.dtFormatter(t, e).formatToParts()
				}),
				(t.formatInterval = function (t, e) {
					return this.dtFormatter(t.start, e).dtf.formatRange(t.start.toJSDate(), t.end.toJSDate())
				}),
				(t.resolvedOptions = function (t, e) {
					return this.dtFormatter(t, e).resolvedOptions()
				}),
				(t.num = function (t, e) {
					var n
					return (
						void 0 === e && (e = 0),
						this.opts.forceSimple
							? l(t, e)
							: ((n = s({}, this.opts)),
							  0 < e && (n.padTo = e),
							  this.loc.numberFormatter(n).format(t))
					)
				}),
				(t.formatDateTimeFromString = function (r, t) {
					var n = this,
						i = "en" === this.loc.listingMode(),
						e = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
						o = function (t, e) {
							return n.loc.extract(r, t, e)
						},
						a = function (t) {
							return r.isOffsetFixed && 0 === r.offset && t.allowZ
								? "Z"
								: r.isValid
								? r.zone.formatOffset(r.ts, t.format)
								: ""
						},
						u = function () {
							return i
								? me[r.hour < 12 ? 0 : 1]
								: o({ hour: "numeric", hourCycle: "h12" }, "dayperiod")
						},
						s = function (t, e) {
							return i
								? ((n = r), ce(t)[n.month - 1])
								: o(e ? { month: t } : { month: t, day: "numeric" }, "month")
							var n
						},
						c = function (t, e) {
							return i
								? ((n = r), he(t)[n.weekday - 1])
								: o(e ? { weekday: t } : { weekday: t, month: "long", day: "numeric" }, "weekday")
							var n
						},
						l = function (t) {
							var e = d.macroTokenToFormatOpts(t)
							return e ? n.formatWithSystemDefault(r, e) : t
						},
						f = function (t) {
							return i ? ((e = r), ge(t)[e.year < 0 ? 0 : 1]) : o({ era: t }, "era")
							var e
						}
					return we(d.parseFormat(t), function (t) {
						switch (t) {
							case "S":
								return n.num(r.millisecond)
							case "u":
							case "SSS":
								return n.num(r.millisecond, 3)
							case "s":
								return n.num(r.second)
							case "ss":
								return n.num(r.second, 2)
							case "uu":
								return n.num(Math.floor(r.millisecond / 10), 2)
							case "uuu":
								return n.num(Math.floor(r.millisecond / 100))
							case "m":
								return n.num(r.minute)
							case "mm":
								return n.num(r.minute, 2)
							case "h":
								return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12)
							case "hh":
								return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2)
							case "H":
								return n.num(r.hour)
							case "HH":
								return n.num(r.hour, 2)
							case "Z":
								return a({ format: "narrow", allowZ: n.opts.allowZ })
							case "ZZ":
								return a({ format: "short", allowZ: n.opts.allowZ })
							case "ZZZ":
								return a({ format: "techie", allowZ: n.opts.allowZ })
							case "ZZZZ":
								return r.zone.offsetName(r.ts, { format: "short", locale: n.loc.locale })
							case "ZZZZZ":
								return r.zone.offsetName(r.ts, { format: "long", locale: n.loc.locale })
							case "z":
								return r.zoneName
							case "a":
								return u()
							case "d":
								return e ? o({ day: "numeric" }, "day") : n.num(r.day)
							case "dd":
								return e ? o({ day: "2-digit" }, "day") : n.num(r.day, 2)
							case "c":
								return n.num(r.weekday)
							case "ccc":
								return c("short", !0)
							case "cccc":
								return c("long", !0)
							case "ccccc":
								return c("narrow", !0)
							case "E":
								return n.num(r.weekday)
							case "EEE":
								return c("short", !1)
							case "EEEE":
								return c("long", !1)
							case "EEEEE":
								return c("narrow", !1)
							case "L":
								return e ? o({ month: "numeric", day: "numeric" }, "month") : n.num(r.month)
							case "LL":
								return e ? o({ month: "2-digit", day: "numeric" }, "month") : n.num(r.month, 2)
							case "LLL":
								return s("short", !0)
							case "LLLL":
								return s("long", !0)
							case "LLLLL":
								return s("narrow", !0)
							case "M":
								return e ? o({ month: "numeric" }, "month") : n.num(r.month)
							case "MM":
								return e ? o({ month: "2-digit" }, "month") : n.num(r.month, 2)
							case "MMM":
								return s("short", !1)
							case "MMMM":
								return s("long", !1)
							case "MMMMM":
								return s("narrow", !1)
							case "y":
								return e ? o({ year: "numeric" }, "year") : n.num(r.year)
							case "yy":
								return e ? o({ year: "2-digit" }, "year") : n.num(r.year.toString().slice(-2), 2)
							case "yyyy":
								return e ? o({ year: "numeric" }, "year") : n.num(r.year, 4)
							case "yyyyyy":
								return e ? o({ year: "numeric" }, "year") : n.num(r.year, 6)
							case "G":
								return f("short")
							case "GG":
								return f("long")
							case "GGGGG":
								return f("narrow")
							case "kk":
								return n.num(r.weekYear.toString().slice(-2), 2)
							case "kkkk":
								return n.num(r.weekYear, 4)
							case "W":
								return n.num(r.weekNumber)
							case "WW":
								return n.num(r.weekNumber, 2)
							case "o":
								return n.num(r.ordinal)
							case "ooo":
								return n.num(r.ordinal, 3)
							case "q":
								return n.num(r.quarter)
							case "qq":
								return n.num(r.quarter, 2)
							case "X":
								return n.num(Math.floor(r.ts / 1e3))
							case "x":
								return n.num(r.ts)
							default:
								return l(t)
						}
					})
				}),
				(t.formatDurationFromString = function (t, e) {
					var n,
						r = this,
						i = function (t) {
							switch (t[0]) {
								case "S":
									return "millisecond"
								case "s":
									return "second"
								case "m":
									return "minute"
								case "h":
									return "hour"
								case "d":
									return "day"
								case "w":
									return "week"
								case "M":
									return "month"
								case "y":
									return "year"
								default:
									return null
							}
						},
						e = d.parseFormat(e),
						o = e.reduce(function (t, e) {
							var n = e.literal,
								e = e.val
							return n ? t : t.concat(e)
						}, []),
						t = t.shiftTo.apply(
							t,
							o.map(i).filter(function (t) {
								return t
							})
						)
					return we(
						e,
						((n = t),
						function (t) {
							var e = i(t)
							return e ? r.num(n.get(e), t.length) : t
						})
					)
				}),
				d
			)
		})(),
		S = (function () {
			function t(t, e) {
				;(this.reason = t), (this.explanation = e)
			}
			return (
				(t.prototype.toMessage = function () {
					return this.explanation ? this.reason + ": " + this.explanation : this.reason
				}),
				t
			)
		})(),
		r = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/
	function p() {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
		var r = e.reduce(function (t, e) {
			return t + e.source
		}, "")
		return RegExp("^" + r + "$")
	}
	function N() {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
		return function (o) {
			return e
				.reduce(
					function (t, e) {
						var n = t[0],
							r = t[1],
							t = t[2],
							e = e(o, t),
							t = e[0],
							i = e[1],
							e = e[2]
						return [s({}, n, t), i || r, e]
					},
					[{}, null, 1]
				)
				.slice(0, 2)
		}
	}
	function M(t) {
		if (null != t) {
			for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
				n[r - 1] = arguments[r]
			for (var i = 0, o = n; i < o.length; i++) {
				var a = o[i],
					u = a[0],
					a = a[1],
					u = u.exec(t)
				if (u) return a(u)
			}
		}
		return [null, null]
	}
	function be() {
		for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e]
		return function (t, e) {
			for (var n = {}, r = 0; r < i.length; r++) n[i[r]] = m(t[e + r])
			return [n, null, e + r]
		}
	}
	var e = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
		a = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
		Te = RegExp(a.source + ("(?:" + e.source + "?(?:\\[(" + r.source + ")\\])?)?")),
		D = RegExp("(?:T" + Te.source + ")?"),
		Oe = be("weekYear", "weekNumber", "weekDay"),
		Se = be("year", "ordinal"),
		e = RegExp(a.source + " ?(?:" + e.source + "|(" + r.source + "))?"),
		r = RegExp("(?: " + e.source + ")?")
	function Ne(t, e, n) {
		t = t[e]
		return b(t) ? n : m(t)
	}
	function Me(t, e) {
		return [
			{
				hours: Ne(t, e, 0),
				minutes: Ne(t, e + 1, 0),
				seconds: Ne(t, e + 2, 0),
				milliseconds: Jt(t[e + 3]),
			},
			null,
			e + 4,
		]
	}
	function De(t, e) {
		var n = !t[e] && !t[e + 1],
			t = ee(t[e + 1], t[e + 2])
		return [{}, n ? null : d.instance(t), e + 3]
	}
	function Ee(t, e) {
		return [{}, t[e] ? f.create(t[e]) : null, e + 1]
	}
	var Ve = RegExp("^T?" + a.source + "$"),
		Ie =
			/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/
	function xe(t) {
		function e(t, e) {
			return void 0 === e && (e = !1), void 0 !== t && (e || (t && l)) ? -t : t
		}
		var n = t[0],
			r = t[1],
			i = t[2],
			o = t[3],
			a = t[4],
			u = t[5],
			s = t[6],
			c = t[7],
			t = t[8],
			l = "-" === n[0],
			n = c && "-" === c[0]
		return [
			{
				years: e(v(r)),
				months: e(v(i)),
				weeks: e(v(o)),
				days: e(v(a)),
				hours: e(v(u)),
				minutes: e(v(s)),
				seconds: e(v(c), "-0" === c),
				milliseconds: e(Jt(t), n),
			},
		]
	}
	var Ce = {
		GMT: 0,
		EDT: -240,
		EST: -300,
		CDT: -300,
		CST: -360,
		MDT: -360,
		MST: -420,
		PDT: -420,
		PST: -480,
	}
	function Ze(t, e, n, r, i, o, a) {
		e = {
			year: 2 === e.length ? Xt(m(e)) : m(e),
			month: ue.indexOf(n) + 1,
			day: m(r),
			hour: m(i),
			minute: m(o),
		}
		return (
			a && (e.second = m(a)),
			t && (e.weekday = 3 < t.length ? le.indexOf(t) + 1 : fe.indexOf(t) + 1),
			e
		)
	}
	var Fe =
		/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
	function Le(t) {
		var e = t[1],
			n = t[2],
			r = t[3],
			i = t[4],
			o = t[5],
			a = t[6],
			u = t[7],
			s = t[8],
			c = t[9],
			l = t[10],
			t = t[11],
			e = Ze(e, i, r, n, o, a, u),
			i = s ? Ce[s] : c ? 0 : ee(l, t)
		return [e, new d(i)]
	}
	var ze =
			/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
		je =
			/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
		Ae =
			/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
	function qe(t) {
		var e = t[1],
			n = t[2],
			r = t[3]
		return [Ze(e, t[4], r, n, t[5], t[6], t[7]), d.utcInstance]
	}
	function _e(t) {
		var e = t[1],
			n = t[2],
			r = t[3],
			i = t[4],
			o = t[5],
			a = t[6]
		return [Ze(e, t[7], n, r, i, o, a), d.utcInstance]
	}
	var Ue = p(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, D),
		Pe = p(/(\d{4})-?W(\d\d)(?:-?(\d))?/, D),
		He = p(/(\d{4})-?(\d{3})/, D),
		Re = p(Te),
		We = N(
			function (t, e) {
				return [{ year: Ne(t, e), month: Ne(t, e + 1, 1), day: Ne(t, e + 2, 1) }, null, e + 3]
			},
			Me,
			De,
			Ee
		),
		Je = N(Oe, Me, De, Ee),
		Ye = N(Se, Me, De, Ee),
		Ge = N(Me, De, Ee)
	var $e = N(Me)
	var Be = p(/(\d{4})-(\d\d)-(\d\d)/, r),
		Qe = p(e),
		Ke = N(Me, De, Ee)
	var Xe = "Invalid Duration",
		a = {
			weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 },
			days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
			hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
			minutes: { seconds: 60, milliseconds: 6e4 },
			seconds: { milliseconds: 1e3 },
		},
		tn = s(
			{
				years: {
					quarters: 4,
					months: 12,
					weeks: 52,
					days: 365,
					hours: 8760,
					minutes: 525600,
					seconds: 31536e3,
					milliseconds: 31536e6,
				},
				quarters: {
					months: 3,
					weeks: 13,
					days: 91,
					hours: 2184,
					minutes: 131040,
					seconds: 7862400,
					milliseconds: 78624e5,
				},
				months: {
					weeks: 4,
					days: 30,
					hours: 720,
					minutes: 43200,
					seconds: 2592e3,
					milliseconds: 2592e6,
				},
			},
			a
		),
		D = 365.2425,
		Te = 30.436875,
		en = s(
			{
				years: {
					quarters: 4,
					months: 12,
					weeks: D / 7,
					days: D,
					hours: 24 * D,
					minutes: 525949.2,
					seconds: 525949.2 * 60,
					milliseconds: 525949.2 * 60 * 1e3,
				},
				quarters: {
					months: 3,
					weeks: D / 28,
					days: D / 4,
					hours: (24 * D) / 4,
					minutes: 131487.3,
					seconds: (525949.2 * 60) / 4,
					milliseconds: 7889237999.999999,
				},
				months: {
					weeks: Te / 7,
					days: Te,
					hours: 24 * Te,
					minutes: 43829.1,
					seconds: 2629746,
					milliseconds: 2629746e3,
				},
			},
			a
		),
		nn = [
			"years",
			"quarters",
			"months",
			"weeks",
			"days",
			"hours",
			"minutes",
			"seconds",
			"milliseconds",
		],
		rn = nn.slice(0).reverse()
	function E(t, e, n) {
		n = {
			values: (n = void 0 === n ? !1 : n) ? e.values : s({}, t.values, e.values || {}),
			loc: t.loc.clone(e.loc),
			conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
			matrix: e.matrix || t.matrix,
		}
		return new V(n)
	}
	function on(t, e) {
		for (var n, r = null != (n = e.milliseconds) ? n : 0, i = H(rn.slice(1)); !(o = i()).done; ) {
			var o = o.value
			e[o] && (r += e[o] * t[o].milliseconds)
		}
		return r
	}
	function an(i, o) {
		var a = on(i, o) < 0 ? -1 : 1
		rn.reduce(function (t, e) {
			var n, r
			return b(o[e])
				? t
				: (t &&
						((r = o[t] * a),
						(n = i[e][t]),
						(r = Math.floor(r / n)),
						(o[e] += r * a),
						(o[t] -= r * n * a)),
				  e)
		}, null)
	}
	var V = (function () {
			function m(t) {
				var e = "longterm" === t.conversionAccuracy || !1,
					n = e ? en : tn
				t.matrix && (n = t.matrix),
					(this.values = t.values),
					(this.loc = t.loc || g.create()),
					(this.conversionAccuracy = e ? "longterm" : "casual"),
					(this.invalid = t.invalid || null),
					(this.matrix = n),
					(this.isLuxonDuration = !0)
			}
			;(m.fromMillis = function (t, e) {
				return m.fromObject({ milliseconds: t }, e)
			}),
				(m.fromObject = function (t, e) {
					if ((void 0 === e && (e = {}), null == t || "object" != typeof t))
						throw new u(
							"Duration.fromObject: argument expected to be an object, got " +
								(null === t ? "null" : typeof t)
						)
					return new m({
						values: re(t, m.normalizeUnit),
						loc: g.fromObject(e),
						conversionAccuracy: e.conversionAccuracy,
						matrix: e.matrix,
					})
				}),
				(m.fromDurationLike = function (t) {
					if (y(t)) return m.fromMillis(t)
					if (m.isDuration(t)) return t
					if ("object" == typeof t) return m.fromObject(t)
					throw new u("Unknown duration argument " + t + " of type " + typeof t)
				}),
				(m.fromISO = function (t, e) {
					var n = M(t, [Ie, xe])[0]
					return n
						? m.fromObject(n, e)
						: m.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
				}),
				(m.fromISOTime = function (t, e) {
					var n = M(t, [Ve, $e])[0]
					return n
						? m.fromObject(n, e)
						: m.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
				}),
				(m.invalid = function (t, e) {
					if ((void 0 === e && (e = null), !t))
						throw new u("need to specify a reason the Duration is invalid")
					t = t instanceof S ? t : new S(t, e)
					if (k.throwOnInvalid) throw new J(t)
					return new m({ invalid: t })
				}),
				(m.normalizeUnit = function (t) {
					var e = {
						year: "years",
						years: "years",
						quarter: "quarters",
						quarters: "quarters",
						month: "months",
						months: "months",
						week: "weeks",
						weeks: "weeks",
						day: "days",
						days: "days",
						hour: "hours",
						hours: "hours",
						minute: "minutes",
						minutes: "minutes",
						second: "seconds",
						seconds: "seconds",
						millisecond: "milliseconds",
						milliseconds: "milliseconds",
					}[t && t.toLowerCase()]
					if (e) return e
					throw new G(t)
				}),
				(m.isDuration = function (t) {
					return (t && t.isLuxonDuration) || !1
				})
			var t = m.prototype
			return (
				(t.toFormat = function (t, e) {
					e = s({}, (e = void 0 === e ? {} : e), { floor: !1 !== e.round && !1 !== e.floor })
					return this.isValid ? O.create(this.loc, e).formatDurationFromString(this, t) : Xe
				}),
				(t.toHuman = function (n) {
					var t,
						r = this
					return (
						void 0 === n && (n = {}),
						this.isValid
							? ((t = nn
									.map(function (t) {
										var e = r.values[t]
										return b(e)
											? null
											: r.loc
													.numberFormatter(
														s({ style: "unit", unitDisplay: "long" }, n, { unit: t.slice(0, -1) })
													)
													.format(e)
									})
									.filter(function (t) {
										return t
									})),
							  this.loc
									.listFormatter(s({ type: "conjunction", style: n.listStyle || "narrow" }, n))
									.format(t))
							: Xe
					)
				}),
				(t.toObject = function () {
					return this.isValid ? s({}, this.values) : {}
				}),
				(t.toISO = function () {
					var t
					return this.isValid
						? ((t = "P"),
						  0 !== this.years && (t += this.years + "Y"),
						  (0 === this.months && 0 === this.quarters) ||
								(t += this.months + 3 * this.quarters + "M"),
						  0 !== this.weeks && (t += this.weeks + "W"),
						  0 !== this.days && (t += this.days + "D"),
						  (0 === this.hours &&
								0 === this.minutes &&
								0 === this.seconds &&
								0 === this.milliseconds) ||
								(t += "T"),
						  0 !== this.hours && (t += this.hours + "H"),
						  0 !== this.minutes && (t += this.minutes + "M"),
						  (0 === this.seconds && 0 === this.milliseconds) ||
								(t += Yt(this.seconds + this.milliseconds / 1e3, 3) + "S"),
						  "P" === t && (t += "T0S"),
						  t)
						: null
				}),
				(t.toISOTime = function (t) {
					var e
					return (
						void 0 === t && (t = {}),
						!this.isValid || (e = this.toMillis()) < 0 || 864e5 <= e
							? null
							: ((t = s(
									{
										suppressMilliseconds: !1,
										suppressSeconds: !1,
										includePrefix: !1,
										format: "extended",
									},
									t,
									{ includeOffset: !1 }
							  )),
							  L.fromMillis(e, { zone: "UTC" }).toISOTime(t))
					)
				}),
				(t.toJSON = function () {
					return this.toISO()
				}),
				(t.toString = function () {
					return this.toISO()
				}),
				(t.toMillis = function () {
					return this.isValid ? on(this.matrix, this.values) : NaN
				}),
				(t.valueOf = function () {
					return this.toMillis()
				}),
				(t.plus = function (t) {
					if (!this.isValid) return this
					for (var e = m.fromDurationLike(t), n = {}, r = 0, i = nn; r < i.length; r++) {
						var o = i[r]
						;(h(e.values, o) || h(this.values, o)) && (n[o] = e.get(o) + this.get(o))
					}
					return E(this, { values: n }, !0)
				}),
				(t.minus = function (t) {
					return this.isValid ? ((t = m.fromDurationLike(t)), this.plus(t.negate())) : this
				}),
				(t.mapUnits = function (t) {
					if (!this.isValid) return this
					for (var e = {}, n = 0, r = Object.keys(this.values); n < r.length; n++) {
						var i = r[n]
						e[i] = ne(t(this.values[i], i))
					}
					return E(this, { values: e }, !0)
				}),
				(t.get = function (t) {
					return this[m.normalizeUnit(t)]
				}),
				(t.set = function (t) {
					return this.isValid
						? E(this, { values: s({}, this.values, re(t, m.normalizeUnit)) })
						: this
				}),
				(t.reconfigure = function (t) {
					var t = void 0 === t ? {} : t,
						e = t.locale,
						n = t.numberingSystem,
						r = t.conversionAccuracy,
						t = t.matrix,
						e = this.loc.clone({ locale: e, numberingSystem: n })
					return E(this, { loc: e, matrix: t, conversionAccuracy: r })
				}),
				(t.as = function (t) {
					return this.isValid ? this.shiftTo(t).get(t) : NaN
				}),
				(t.normalize = function () {
					var t
					return this.isValid
						? ((t = this.toObject()), an(this.matrix, t), E(this, { values: t }, !0))
						: this
				}),
				(t.rescale = function () {
					var t
					return this.isValid
						? ((t = (function (t) {
								for (var e = {}, n = 0, r = Object.entries(t); n < r.length; n++) {
									var i = r[n],
										o = i[0],
										i = i[1]
									0 !== i && (e[o] = i)
								}
								return e
						  })(this.normalize().shiftToAll().toObject())),
						  E(this, { values: t }, !0))
						: this
				}),
				(t.shiftTo = function () {
					for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
					if (!this.isValid) return this
					if (0 === e.length) return this
					for (
						var r,
							e = e.map(function (t) {
								return m.normalizeUnit(t)
							}),
							i = {},
							o = {},
							a = this.toObject(),
							u = 0,
							s = nn;
						u < s.length;
						u++
					) {
						var c = s[u]
						if (0 <= e.indexOf(c)) {
							var l,
								f = c,
								d = 0
							for (l in o) (d += this.matrix[l][c] * o[l]), (o[l] = 0)
							y(a[c]) && (d += a[c])
							var h = Math.trunc(d)
							o[c] = (1e3 * d - 1e3 * (i[c] = h)) / 1e3
						} else y(a[c]) && (o[c] = a[c])
					}
					for (r in o) 0 !== o[r] && (i[f] += r === f ? o[r] : o[r] / this.matrix[f][r])
					return an(this.matrix, i), E(this, { values: i }, !0)
				}),
				(t.shiftToAll = function () {
					return this.isValid
						? this.shiftTo(
								"years",
								"months",
								"weeks",
								"days",
								"hours",
								"minutes",
								"seconds",
								"milliseconds"
						  )
						: this
				}),
				(t.negate = function () {
					if (!this.isValid) return this
					for (var t = {}, e = 0, n = Object.keys(this.values); e < n.length; e++) {
						var r = n[e]
						t[r] = 0 === this.values[r] ? 0 : -this.values[r]
					}
					return E(this, { values: t }, !0)
				}),
				(t.equals = function (t) {
					if (!this.isValid || !t.isValid) return !1
					if (!this.loc.equals(t.loc)) return !1
					for (var e, n = 0, r = nn; n < r.length; n++) {
						var i = r[n]
						if (
							((e = this.values[i]),
							(i = t.values[i]),
							!(void 0 === e || 0 === e ? void 0 === i || 0 === i : e === i))
						)
							return !1
					}
					return !0
				}),
				o(m, [
					{
						key: "locale",
						get: function () {
							return this.isValid ? this.loc.locale : null
						},
					},
					{
						key: "numberingSystem",
						get: function () {
							return this.isValid ? this.loc.numberingSystem : null
						},
					},
					{
						key: "years",
						get: function () {
							return this.isValid ? this.values.years || 0 : NaN
						},
					},
					{
						key: "quarters",
						get: function () {
							return this.isValid ? this.values.quarters || 0 : NaN
						},
					},
					{
						key: "months",
						get: function () {
							return this.isValid ? this.values.months || 0 : NaN
						},
					},
					{
						key: "weeks",
						get: function () {
							return this.isValid ? this.values.weeks || 0 : NaN
						},
					},
					{
						key: "days",
						get: function () {
							return this.isValid ? this.values.days || 0 : NaN
						},
					},
					{
						key: "hours",
						get: function () {
							return this.isValid ? this.values.hours || 0 : NaN
						},
					},
					{
						key: "minutes",
						get: function () {
							return this.isValid ? this.values.minutes || 0 : NaN
						},
					},
					{
						key: "seconds",
						get: function () {
							return this.isValid ? this.values.seconds || 0 : NaN
						},
					},
					{
						key: "milliseconds",
						get: function () {
							return this.isValid ? this.values.milliseconds || 0 : NaN
						},
					},
					{
						key: "isValid",
						get: function () {
							return null === this.invalid
						},
					},
					{
						key: "invalidReason",
						get: function () {
							return this.invalid ? this.invalid.reason : null
						},
					},
					{
						key: "invalidExplanation",
						get: function () {
							return this.invalid ? this.invalid.explanation : null
						},
					},
				]),
				m
			)
		})(),
		un = "Invalid Interval"
	var sn = (function () {
			function c(t) {
				;(this.s = t.start),
					(this.e = t.end),
					(this.invalid = t.invalid || null),
					(this.isLuxonInterval = !0)
			}
			;(c.invalid = function (t, e) {
				if ((void 0 === e && (e = null), !t))
					throw new u("need to specify a reason the Interval is invalid")
				t = t instanceof S ? t : new S(t, e)
				if (k.throwOnInvalid) throw new W(t)
				return new c({ invalid: t })
			}),
				(c.fromDateTimes = function (t, e) {
					var n,
						t = ar(t),
						e = ar(e),
						r =
							((n = e),
							(r = t) && r.isValid
								? n && n.isValid
									? n < r
										? sn.invalid(
												"end before start",
												"The end of an interval must be after its start, but you had start=" +
													r.toISO() +
													" and end=" +
													n.toISO()
										  )
										: null
									: sn.invalid("missing or invalid end")
								: sn.invalid("missing or invalid start"))
					return null == r ? new c({ start: t, end: e }) : r
				}),
				(c.after = function (t, e) {
					;(e = V.fromDurationLike(e)), (t = ar(t))
					return c.fromDateTimes(t, t.plus(e))
				}),
				(c.before = function (t, e) {
					;(e = V.fromDurationLike(e)), (t = ar(t))
					return c.fromDateTimes(t.minus(e), t)
				}),
				(c.fromISO = function (t, e) {
					var n,
						r,
						i,
						o = (t || "").split("/", 2),
						a = o[0],
						u = o[1]
					if (a && u) {
						try {
							s = (n = L.fromISO(a, e)).isValid
						} catch (u) {
							s = !1
						}
						try {
							i = (r = L.fromISO(u, e)).isValid
						} catch (u) {
							i = !1
						}
						if (s && i) return c.fromDateTimes(n, r)
						if (s) {
							o = V.fromISO(u, e)
							if (o.isValid) return c.after(n, o)
						} else if (i) {
							var s = V.fromISO(a, e)
							if (s.isValid) return c.before(r, s)
						}
					}
					return c.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
				}),
				(c.isInterval = function (t) {
					return (t && t.isLuxonInterval) || !1
				})
			var t = c.prototype
			return (
				(t.length = function (t) {
					return (
						void 0 === t && (t = "milliseconds"),
						this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN
					)
				}),
				(t.count = function (t) {
					var e, n
					return (
						void 0 === t && (t = "milliseconds"),
						this.isValid
							? ((e = this.start.startOf(t)),
							  (n = this.end.startOf(t)),
							  Math.floor(n.diff(e, t).get(t)) + (n.valueOf() !== this.end.valueOf()))
							: NaN
					)
				}),
				(t.hasSame = function (t) {
					return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t))
				}),
				(t.isEmpty = function () {
					return this.s.valueOf() === this.e.valueOf()
				}),
				(t.isAfter = function (t) {
					return !!this.isValid && this.s > t
				}),
				(t.isBefore = function (t) {
					return !!this.isValid && this.e <= t
				}),
				(t.contains = function (t) {
					return !!this.isValid && this.s <= t && this.e > t
				}),
				(t.set = function (t) {
					var t = void 0 === t ? {} : t,
						e = t.start,
						t = t.end
					return this.isValid ? c.fromDateTimes(e || this.s, t || this.e) : this
				}),
				(t.splitAt = function () {
					var e = this
					if (!this.isValid) return []
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
					for (
						var i = n
								.map(ar)
								.filter(function (t) {
									return e.contains(t)
								})
								.sort(),
							o = [],
							a = this.s,
							u = 0;
						a < this.e;

					) {
						var s = i[u] || this.e,
							s = +s > +this.e ? this.e : s
						o.push(c.fromDateTimes(a, s)), (a = s), (u += 1)
					}
					return o
				}),
				(t.splitBy = function (t) {
					var e = V.fromDurationLike(t)
					if (!this.isValid || !e.isValid || 0 === e.as("milliseconds")) return []
					for (var n = this.s, r = 1, i = []; n < this.e; ) {
						var o = this.start.plus(
								e.mapUnits(function (t) {
									return t * r
								})
							),
							o = +o > +this.e ? this.e : o
						i.push(c.fromDateTimes(n, o)), (n = o), (r += 1)
					}
					return i
				}),
				(t.divideEqually = function (t) {
					return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : []
				}),
				(t.overlaps = function (t) {
					return this.e > t.s && this.s < t.e
				}),
				(t.abutsStart = function (t) {
					return !!this.isValid && +this.e == +t.s
				}),
				(t.abutsEnd = function (t) {
					return !!this.isValid && +t.e == +this.s
				}),
				(t.engulfs = function (t) {
					return !!this.isValid && this.s <= t.s && this.e >= t.e
				}),
				(t.equals = function (t) {
					return !(!this.isValid || !t.isValid) && this.s.equals(t.s) && this.e.equals(t.e)
				}),
				(t.intersection = function (t) {
					var e
					return this.isValid
						? ((e = (this.s > t.s ? this : t).s),
						  (t = (this.e < t.e ? this : t).e) <= e ? null : c.fromDateTimes(e, t))
						: this
				}),
				(t.union = function (t) {
					var e
					return this.isValid
						? ((e = (this.s < t.s ? this : t).s),
						  (t = (this.e > t.e ? this : t).e),
						  c.fromDateTimes(e, t))
						: this
				}),
				(c.merge = function (t) {
					var t = t
							.sort(function (t, e) {
								return t.s - e.s
							})
							.reduce(
								function (t, e) {
									var n = t[0],
										t = t[1]
									return t
										? t.overlaps(e) || t.abutsStart(e)
											? [n, t.union(e)]
											: [n.concat([t]), e]
										: [n, e]
								},
								[[], null]
							),
						e = t[0],
						t = t[1]
					return t && e.push(t), e
				}),
				(c.xor = function (t) {
					for (
						var e,
							n = null,
							r = 0,
							i = [],
							t = t.map(function (t) {
								return [
									{ time: t.s, type: "s" },
									{ time: t.e, type: "e" },
								]
							}),
							o = H(
								(e = Array.prototype).concat.apply(e, t).sort(function (t, e) {
									return t.time - e.time
								})
							);
						!(a = o()).done;

					)
						var a = a.value,
							n =
								1 === (r += "s" === a.type ? 1 : -1)
									? a.time
									: (n && +n != +a.time && i.push(c.fromDateTimes(n, a.time)), null)
					return c.merge(i)
				}),
				(t.difference = function () {
					for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
						n[r] = arguments[r]
					return c
						.xor([this].concat(n))
						.map(function (t) {
							return e.intersection(t)
						})
						.filter(function (t) {
							return t && !t.isEmpty()
						})
				}),
				(t.toString = function () {
					return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : un
				}),
				(t.toLocaleString = function (t, e) {
					return (
						void 0 === t && (t = $),
						void 0 === e && (e = {}),
						this.isValid ? O.create(this.s.loc.clone(e), t).formatInterval(this) : un
					)
				}),
				(t.toISO = function (t) {
					return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : un
				}),
				(t.toISODate = function () {
					return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : un
				}),
				(t.toISOTime = function (t) {
					return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : un
				}),
				(t.toFormat = function (t, e) {
					;(e = (void 0 === e ? {} : e).separator), (e = void 0 === e ? " – " : e)
					return this.isValid ? "" + this.s.toFormat(t) + e + this.e.toFormat(t) : un
				}),
				(t.toDuration = function (t, e) {
					return this.isValid ? this.e.diff(this.s, t, e) : V.invalid(this.invalidReason)
				}),
				(t.mapEndpoints = function (t) {
					return c.fromDateTimes(t(this.s), t(this.e))
				}),
				o(c, [
					{
						key: "start",
						get: function () {
							return this.isValid ? this.s : null
						},
					},
					{
						key: "end",
						get: function () {
							return this.isValid ? this.e : null
						},
					},
					{
						key: "isValid",
						get: function () {
							return null === this.invalidReason
						},
					},
					{
						key: "invalidReason",
						get: function () {
							return this.invalid ? this.invalid.reason : null
						},
					},
					{
						key: "invalidExplanation",
						get: function () {
							return this.invalid ? this.invalid.explanation : null
						},
					},
				]),
				c
			)
		})(),
		cn = (function () {
			function t() {}
			return (
				(t.hasDST = function (t) {
					void 0 === t && (t = k.defaultZone)
					var e = L.now().setZone(t).set({ month: 12 })
					return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset
				}),
				(t.isValidIANAZone = function (t) {
					return f.isValidZone(t)
				}),
				(t.normalizeZone = function (t) {
					return w(t, k.defaultZone)
				}),
				(t.months = function (t, e) {
					void 0 === t && (t = "long")
					var e = void 0 === e ? {} : e,
						n = e.locale,
						r = e.numberingSystem,
						i = e.locObj,
						i = void 0 === i ? null : i,
						e = e.outputCalendar
					return (
						i ||
						g.create(void 0 === n ? null : n, void 0 === r ? null : r, void 0 === e ? "gregory" : e)
					).months(t)
				}),
				(t.monthsFormat = function (t, e) {
					void 0 === t && (t = "long")
					var e = void 0 === e ? {} : e,
						n = e.locale,
						r = e.numberingSystem,
						i = e.locObj,
						i = void 0 === i ? null : i,
						e = e.outputCalendar
					return (
						i ||
						g.create(void 0 === n ? null : n, void 0 === r ? null : r, void 0 === e ? "gregory" : e)
					).months(t, !0)
				}),
				(t.weekdays = function (t, e) {
					void 0 === t && (t = "long")
					var e = void 0 === e ? {} : e,
						n = e.locale,
						r = e.numberingSystem,
						e = e.locObj
					return (
						(void 0 === e ? null : e) ||
						g.create(void 0 === n ? null : n, void 0 === r ? null : r, null)
					).weekdays(t)
				}),
				(t.weekdaysFormat = function (t, e) {
					void 0 === t && (t = "long")
					var e = void 0 === e ? {} : e,
						n = e.locale,
						r = e.numberingSystem,
						e = e.locObj
					return (
						(void 0 === e ? null : e) ||
						g.create(void 0 === n ? null : n, void 0 === r ? null : r, null)
					).weekdays(t, !0)
				}),
				(t.meridiems = function (t) {
					t = (void 0 === t ? {} : t).locale
					return g.create(void 0 === t ? null : t).meridiems()
				}),
				(t.eras = function (t, e) {
					void 0 === t && (t = "short")
					e = (void 0 === e ? {} : e).locale
					return g.create(void 0 === e ? null : e, null, "gregory").eras(t)
				}),
				(t.features = function () {
					return { relative: Rt() }
				}),
				t
			)
		})()
	function ln(t, e) {
		function n(t) {
			return t.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf()
		}
		e = n(e) - n(t)
		return Math.floor(V.fromMillis(e).as("days"))
	}
	function fn(t, e, n, r) {
		var t = (function (t, e, n) {
				for (
					var r,
						i,
						o = {},
						a = t,
						u = 0,
						s = [
							[
								"years",
								function (t, e) {
									return e.year - t.year
								},
							],
							[
								"quarters",
								function (t, e) {
									return e.quarter - t.quarter + 4 * (e.year - t.year)
								},
							],
							[
								"months",
								function (t, e) {
									return e.month - t.month + 12 * (e.year - t.year)
								},
							],
							[
								"weeks",
								function (t, e) {
									t = ln(t, e)
									return (t - (t % 7)) / 7
								},
							],
							["days", ln],
						];
					u < s.length;
					u++
				) {
					var c = s[u],
						l = c[0],
						c = c[1]
					0 <= n.indexOf(l) &&
						((o[(r = l)] = c(t, e)),
						e < (i = a.plus(o))
							? (o[l]--, e < (t = a.plus(o)) && ((i = t), o[l]--, (t = a.plus(o))))
							: (t = i))
				}
				return [t, o, i, r]
			})(t, e, n),
			i = t[0],
			o = t[1],
			a = t[2],
			t = t[3],
			u = e - i,
			n = n.filter(function (t) {
				return 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(t)
			}),
			e =
				(0 === n.length &&
					(a = a < e ? i.plus((((e = {})[t] = 1), e)) : a) !== i &&
					(o[t] = (o[t] || 0) + u / (a - i)),
				V.fromObject(o, r))
		return 0 < n.length ? (t = V.fromMillis(u, r)).shiftTo.apply(t, n).plus(e) : e
	}
	var dn = {
			arab: "[٠-٩]",
			arabext: "[۰-۹]",
			bali: "[᭐-᭙]",
			beng: "[০-৯]",
			deva: "[०-९]",
			fullwide: "[０-９]",
			gujr: "[૦-૯]",
			hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
			khmr: "[០-៩]",
			knda: "[೦-೯]",
			laoo: "[໐-໙]",
			limb: "[᥆-᥏]",
			mlym: "[൦-൯]",
			mong: "[᠐-᠙]",
			mymr: "[၀-၉]",
			orya: "[୦-୯]",
			tamldec: "[௦-௯]",
			telu: "[౦-౯]",
			thai: "[๐-๙]",
			tibt: "[༠-༩]",
			latn: "\\d",
		},
		hn = {
			arab: [1632, 1641],
			arabext: [1776, 1785],
			bali: [6992, 7001],
			beng: [2534, 2543],
			deva: [2406, 2415],
			fullwide: [65296, 65303],
			gujr: [2790, 2799],
			khmr: [6112, 6121],
			knda: [3302, 3311],
			laoo: [3792, 3801],
			limb: [6470, 6479],
			mlym: [3430, 3439],
			mong: [6160, 6169],
			mymr: [4160, 4169],
			orya: [2918, 2927],
			tamldec: [3046, 3055],
			telu: [3174, 3183],
			thai: [3664, 3673],
			tibt: [3872, 3881],
		},
		mn = dn.hanidec.replace(/[\[|\]]/g, "").split("")
	function I(t, e) {
		t = t.numberingSystem
		return void 0 === e && (e = ""), new RegExp("" + dn[t || "latn"] + e)
	}
	var yn = "missing Intl.DateTimeFormat.formatToParts support"
	function x(t, e) {
		return (
			void 0 === e &&
				(e = function (t) {
					return t
				}),
			{
				regex: t,
				deser: function (t) {
					t = t[0]
					return e(
						(function (t) {
							var e = parseInt(t, 10)
							if (isNaN(e)) {
								for (var e = "", n = 0; n < t.length; n++) {
									var r = t.charCodeAt(n)
									if (-1 !== t[n].search(dn.hanidec)) e += mn.indexOf(t[n])
									else
										for (var i in hn) {
											var i = hn[i],
												o = i[0],
												i = i[1]
											o <= r && r <= i && (e += r - o)
										}
								}
								return parseInt(e, 10)
							}
							return e
						})(t)
					)
				},
			}
		)
	}
	var vn = "[ " + String.fromCharCode(160) + "]",
		pn = new RegExp(vn, "g")
	function gn(t) {
		return t.replace(/\./g, "\\.?").replace(pn, vn)
	}
	function wn(t) {
		return t.replace(/\./g, "").replace(pn, " ").toLowerCase()
	}
	function C(n, r) {
		return null === n
			? null
			: {
					regex: RegExp(n.map(gn).join("|")),
					deser: function (t) {
						var e = t[0]
						return (
							n.findIndex(function (t) {
								return wn(e) === wn(t)
							}) + r
						)
					},
			  }
	}
	function kn(t, e) {
		return {
			regex: t,
			deser: function (t) {
				return ee(t[1], t[2])
			},
			groups: e,
		}
	}
	function bn(t) {
		return {
			regex: t,
			deser: function (t) {
				return t[0]
			},
		}
	}
	function Tn(e, n) {
		function r(t) {
			return {
				regex: RegExp(t.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
				deser: function (t) {
					return t[0]
				},
				literal: !0,
			}
		}
		var i = I(n),
			o = I(n, "{2}"),
			a = I(n, "{3}"),
			u = I(n, "{4}"),
			s = I(n, "{6}"),
			c = I(n, "{1,2}"),
			l = I(n, "{1,3}"),
			f = I(n, "{1,6}"),
			d = I(n, "{1,9}"),
			h = I(n, "{2,4}"),
			m = I(n, "{4,6}"),
			t = (function (t) {
				if (e.literal) return r(t)
				switch (t.val) {
					case "G":
						return C(n.eras("short"), 0)
					case "GG":
						return C(n.eras("long"), 0)
					case "y":
						return x(f)
					case "yy":
						return x(h, Xt)
					case "yyyy":
						return x(u)
					case "yyyyy":
						return x(m)
					case "yyyyyy":
						return x(s)
					case "M":
						return x(c)
					case "MM":
						return x(o)
					case "MMM":
						return C(n.months("short", !0), 1)
					case "MMMM":
						return C(n.months("long", !0), 1)
					case "L":
						return x(c)
					case "LL":
						return x(o)
					case "LLL":
						return C(n.months("short", !1), 1)
					case "LLLL":
						return C(n.months("long", !1), 1)
					case "d":
						return x(c)
					case "dd":
						return x(o)
					case "o":
						return x(l)
					case "ooo":
						return x(a)
					case "HH":
						return x(o)
					case "H":
						return x(c)
					case "hh":
						return x(o)
					case "h":
						return x(c)
					case "mm":
						return x(o)
					case "m":
					case "q":
						return x(c)
					case "qq":
						return x(o)
					case "s":
						return x(c)
					case "ss":
						return x(o)
					case "S":
						return x(l)
					case "SSS":
						return x(a)
					case "u":
						return bn(d)
					case "uu":
						return bn(c)
					case "uuu":
						return x(i)
					case "a":
						return C(n.meridiems(), 0)
					case "kkkk":
						return x(u)
					case "kk":
						return x(h, Xt)
					case "W":
						return x(c)
					case "WW":
						return x(o)
					case "E":
					case "c":
						return x(i)
					case "EEE":
						return C(n.weekdays("short", !1), 1)
					case "EEEE":
						return C(n.weekdays("long", !1), 1)
					case "ccc":
						return C(n.weekdays("short", !0), 1)
					case "cccc":
						return C(n.weekdays("long", !0), 1)
					case "Z":
					case "ZZ":
						return kn(new RegExp("([+-]" + c.source + ")(?::(" + o.source + "))?"), 2)
					case "ZZZ":
						return kn(new RegExp("([+-]" + c.source + ")(" + o.source + ")?"), 2)
					case "z":
						return bn(/[a-z_+-/]{1,256}?/i)
					case " ":
						return bn(/[^\S\n\r]/)
					default:
						return r(t)
				}
			})(e) || { invalidReason: yn }
		return (t.token = e), t
	}
	var On = {
		year: { "2-digit": "yy", numeric: "yyyyy" },
		month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
		day: { numeric: "d", "2-digit": "dd" },
		weekday: { short: "EEE", long: "EEEE" },
		dayperiod: "a",
		dayPeriod: "a",
		hour12: { numeric: "h", "2-digit": "hh" },
		hour24: { numeric: "H", "2-digit": "HH" },
		minute: { numeric: "m", "2-digit": "mm" },
		second: { numeric: "s", "2-digit": "ss" },
		timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
	}
	var Sn = null
	function Nn(t, n) {
		var e
		return (e = Array.prototype).concat.apply(
			e,
			t.map(function (t) {
				return (
					(e = n),
					(t = t).literal ||
					null == (e = Dn(O.macroTokenToFormatOpts(t.val), e)) ||
					e.includes(void 0)
						? t
						: e
				)
				var e
			})
		)
	}
	function Mn(e, t, n) {
		var n = Nn(O.parseFormat(n), e),
			r = n.map(function (t) {
				return Tn(t, e)
			}),
			i = r.find(function (t) {
				return t.invalidReason
			})
		if (i) return { input: t, tokens: n, invalidReason: i.invalidReason }
		var o,
			r = [
				"^" +
					(i = r)
						.map(function (t) {
							return t.regex
						})
						.reduce(function (t, e) {
							return t + "(" + e.source + ")"
						}, "") +
					"$",
				i,
			],
			i = r[1],
			r = RegExp(r[0], "i"),
			i = (function (t, e, n) {
				var r = t.match(e)
				if (r) {
					var i,
						o,
						a,
						u = {},
						s = 1
					for (i in n)
						h(n, i) &&
							((a = (o = n[i]).groups ? o.groups + 1 : 1),
							!o.literal && o.token && (u[o.token.val[0]] = o.deser(r.slice(s, s + a))),
							(s += a))
					return [r, u]
				}
				return [r, {}]
			})(t, r, i),
			a = i[0],
			i = i[1],
			u = i
				? ((u = null),
				  b((o = i).z) || (u = f.create(o.z)),
				  b(o.Z) || ((u = u || new d(o.Z)), (s = o.Z)),
				  b(o.q) || (o.M = 3 * (o.q - 1) + 1),
				  b(o.h) || (o.h < 12 && 1 === o.a ? (o.h += 12) : 12 === o.h && 0 === o.a && (o.h = 0)),
				  0 === o.G && o.y && (o.y = -o.y),
				  b(o.u) || (o.S = Jt(o.u)),
				  [
						Object.keys(o).reduce(function (t, e) {
							var n = (function (t) {
								switch (t) {
									case "S":
										return "millisecond"
									case "s":
										return "second"
									case "m":
										return "minute"
									case "h":
									case "H":
										return "hour"
									case "d":
										return "day"
									case "o":
										return "ordinal"
									case "L":
									case "M":
										return "month"
									case "y":
										return "year"
									case "E":
									case "c":
										return "weekday"
									case "W":
										return "weekNumber"
									case "k":
										return "weekYear"
									case "q":
										return "quarter"
									default:
										return null
								}
							})(e)
							return n && (t[n] = o[e]), t
						}, {}),
						u,
						s,
				  ])
				: [null, null, void 0],
			s = u[0],
			c = u[1],
			l = u[2]
		if (h(i, "a") && h(i, "H")) throw new Y("Can't include meridiem when specifying 24-hour format")
		return {
			input: t,
			tokens: n,
			regex: r,
			rawMatches: a,
			matches: i,
			result: s,
			zone: c,
			specificOffset: l,
		}
	}
	function Dn(o, t) {
		var e, a
		return o
			? ((e = (t = O.create(t, o).dtFormatter(
					(Sn = Sn || L.fromMillis(1555555555555))
			  )).formatToParts()),
			  (a = t.resolvedOptions()),
			  e.map(function (t) {
					return (
						(e = o),
						(n = a),
						(i = (t = t).type),
						(t = t.value),
						"literal" === i
							? { literal: !(r = /^\s+$/.test(t)), val: r ? " " : t }
							: ((r = e[i]),
							  "hour" === (t = i) &&
									(t =
										null != e.hour12
											? e.hour12
												? "hour12"
												: "hour24"
											: null != e.hourCycle
											? "h11" === e.hourCycle || "h12" === e.hourCycle
												? "hour12"
												: "hour24"
											: n.hour12
											? "hour12"
											: "hour24"),
							  (i = "object" == typeof (i = On[t]) ? i[r] : i) ? { literal: !1, val: i } : void 0)
					)
					var e, n, r, i
			  }))
			: null
	}
	var En = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
		Vn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
	function Z(t, e) {
		return new S(
			"unit out of range",
			"you specified " + e + " (of type " + typeof e + ") as a " + t + ", which is invalid"
		)
	}
	function In(t, e, n) {
		;(e = new Date(Date.UTC(t, e - 1, n))),
			t < 100 && 0 <= t && e.setUTCFullYear(e.getUTCFullYear() - 1900),
			(n = e.getUTCDay())
		return 0 === n ? 7 : n
	}
	function xn(t, e, n) {
		return n + (Gt(t) ? Vn : En)[e - 1]
	}
	function Cn(t, e) {
		var t = Gt(t) ? Vn : En,
			n = t.findIndex(function (t) {
				return t < e
			})
		return { month: n + 1, day: e - t[n] }
	}
	function Zn(t) {
		var e,
			n = t.year,
			r = t.month,
			i = t.day,
			o = xn(n, r, i),
			r = In(n, r, i),
			i = Math.floor((o - r + 10) / 7)
		return (
			i < 1 ? (i = Kt((e = n - 1))) : i > Kt(n) ? ((e = n + 1), (i = 1)) : (e = n),
			s({ weekYear: e, weekNumber: i, weekday: r }, oe(t))
		)
	}
	function Fn(t) {
		var e,
			n = t.weekYear,
			r = t.weekNumber,
			i = t.weekday,
			o = In(n, 1, 4),
			a = $t(n),
			r = 7 * r + i - o - 3,
			i = (r < 1 ? (r += $t((e = n - 1))) : a < r ? ((e = n + 1), (r -= $t(n))) : (e = n), Cn(e, r))
		return s({ year: e, month: i.month, day: i.day }, oe(t))
	}
	function Ln(t) {
		var e = t.year
		return s({ year: e, ordinal: xn(e, t.month, t.day) }, oe(t))
	}
	function zn(t) {
		var e = t.year,
			n = Cn(e, t.ordinal)
		return s({ year: e, month: n.month, day: n.day }, oe(t))
	}
	function jn(t) {
		var e = Ht(t.year),
			n = T(t.month, 1, 12),
			r = T(t.day, 1, Bt(t.year, t.month))
		return e ? (n ? !r && Z("day", t.day) : Z("month", t.month)) : Z("year", t.year)
	}
	function An(t) {
		var e = t.hour,
			n = t.minute,
			r = t.second,
			t = t.millisecond,
			i = T(e, 0, 23) || (24 === e && 0 === n && 0 === r && 0 === t),
			o = T(n, 0, 59),
			a = T(r, 0, 59),
			u = T(t, 0, 999)
		return i
			? o
				? a
					? !u && Z("millisecond", t)
					: Z("second", r)
				: Z("minute", n)
			: Z("hour", e)
	}
	var qn = "Invalid DateTime"
	function _n(t) {
		return new S("unsupported zone", 'the zone "' + t.name + '" is not supported')
	}
	function Un(t) {
		return null === t.weekData && (t.weekData = Zn(t.c)), t.weekData
	}
	function F(t, e) {
		t = { ts: t.ts, zone: t.zone, c: t.c, o: t.o, loc: t.loc, invalid: t.invalid }
		return new L(s({}, t, e, { old: t }))
	}
	function Pn(t, e, n) {
		var r = t - 60 * e * 1e3,
			i = n.offset(r)
		return e === i
			? [r, e]
			: i === (n = n.offset((r -= 60 * (i - e) * 1e3)))
			? [r, i]
			: [t - 60 * Math.min(i, n) * 1e3, Math.max(i, n)]
	}
	function Hn(t, e) {
		t += 60 * e * 1e3
		e = new Date(t)
		return {
			year: e.getUTCFullYear(),
			month: e.getUTCMonth() + 1,
			day: e.getUTCDate(),
			hour: e.getUTCHours(),
			minute: e.getUTCMinutes(),
			second: e.getUTCSeconds(),
			millisecond: e.getUTCMilliseconds(),
		}
	}
	function Rn(t, e, n) {
		return Pn(Qt(t), e, n)
	}
	function Wn(t, e) {
		var n = t.o,
			r = t.c.year + Math.trunc(e.years),
			i = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters),
			r = s({}, t.c, {
				year: r,
				month: i,
				day: Math.min(t.c.day, Bt(r, i)) + Math.trunc(e.days) + 7 * Math.trunc(e.weeks),
			}),
			i = V.fromObject({
				years: e.years - Math.trunc(e.years),
				quarters: e.quarters - Math.trunc(e.quarters),
				months: e.months - Math.trunc(e.months),
				weeks: e.weeks - Math.trunc(e.weeks),
				days: e.days - Math.trunc(e.days),
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				milliseconds: e.milliseconds,
			}).as("milliseconds"),
			e = Pn(Qt(r), n, t.zone),
			r = e[0],
			n = e[1]
		return 0 !== i && (n = t.zone.offset((r += i))), { ts: r, o: n }
	}
	function Jn(t, e, n, r, i, o) {
		var a = n.setZone,
			u = n.zone
		return (t && 0 !== Object.keys(t).length) || e
			? ((t = L.fromObject(t, s({}, n, { zone: e || u, specificOffset: o }))), a ? t : t.setZone(u))
			: L.invalid(new S("unparsable", 'the input "' + i + "\" can't be parsed as " + r))
	}
	function Yn(t, e, n) {
		return (
			void 0 === n && (n = !0),
			t.isValid
				? O.create(g.create("en-US"), { allowZ: n, forceSimple: !0 }).formatDateTimeFromString(t, e)
				: null
		)
	}
	function Gn(t, e) {
		var n = 9999 < t.c.year || t.c.year < 0,
			r = ""
		return (
			n && 0 <= t.c.year && (r += "+"),
			(r += l(t.c.year, n ? 6 : 4)),
			(r = e
				? (r = (r += "-") + l(t.c.month) + "-") + l(t.c.day)
				: (r += l(t.c.month)) + l(t.c.day))
		)
	}
	function $n(t, e, n, r, i, o) {
		var a = l(t.c.hour)
		return (
			e
				? ((a = (a += ":") + l(t.c.minute)),
				  (0 === t.c.millisecond && 0 === t.c.second && n) || (a += ":"))
				: (a += l(t.c.minute)),
			(0 === t.c.millisecond && 0 === t.c.second && n) ||
				((a += l(t.c.second)), 0 === t.c.millisecond && r) ||
				(a = (a += ".") + l(t.c.millisecond, 3)),
			i &&
				(t.isOffsetFixed && 0 === t.offset && !o
					? (a += "Z")
					: (a =
							t.o < 0
								? (a = (a += "-") + l(Math.trunc(-t.o / 60)) + ":") + l(Math.trunc(-t.o % 60))
								: (a = (a += "+") + l(Math.trunc(t.o / 60)) + ":") + l(Math.trunc(t.o % 60)))),
			o && (a += "[" + t.zone.ianaName + "]"),
			a
		)
	}
	var Bn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
		Qn = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
		Kn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
		Xn = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
		tr = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
		er = ["year", "ordinal", "hour", "minute", "second", "millisecond"]
	function nr(t) {
		var e = {
			year: "year",
			years: "year",
			month: "month",
			months: "month",
			day: "day",
			days: "day",
			hour: "hour",
			hours: "hour",
			minute: "minute",
			minutes: "minute",
			quarter: "quarter",
			quarters: "quarter",
			second: "second",
			seconds: "second",
			millisecond: "millisecond",
			milliseconds: "millisecond",
			weekday: "weekday",
			weekdays: "weekday",
			weeknumber: "weekNumber",
			weeksnumber: "weekNumber",
			weeknumbers: "weekNumber",
			weekyear: "weekYear",
			weekyears: "weekYear",
			ordinal: "ordinal",
		}[t.toLowerCase()]
		if (e) return e
		throw new G(t)
	}
	function rr(t, e) {
		var n = w(e.zone, k.defaultZone),
			e = g.fromObject(e),
			r = k.now()
		if (b(t.year)) s = r
		else {
			for (var i = 0, o = Xn; i < o.length; i++) {
				var a = o[i]
				b(t[a]) && (t[a] = Bn[a])
			}
			var u = jn(t) || An(t)
			if (u) return L.invalid(u)
			var u = Rn(t, n.offset(r), n),
				s = u[0],
				u = u[1]
		}
		return new L({ ts: s, zone: n, loc: e, o: u })
	}
	function ir(e, n, r) {
		function t(t, e) {
			return (t = Yt(t, o || r.calendary ? 0 : 2, !0)), n.loc.clone(r).relFormatter(r).format(t, e)
		}
		function i(t) {
			return r.calendary
				? n.hasSame(e, t)
					? 0
					: n.startOf(t).diff(e.startOf(t), t).get(t)
				: n.diff(e, t).get(t)
		}
		var o = !!b(r.round) || r.round
		if (r.unit) return t(i(r.unit), r.unit)
		for (var a = H(r.units); !(u = a()).done; ) {
			var u = u.value,
				s = i(u)
			if (1 <= Math.abs(s)) return t(s, u)
		}
		return t(n < e ? -0 : 0, r.units[r.units.length - 1])
	}
	function or(t) {
		var e = {},
			t =
				0 < t.length && "object" == typeof t[t.length - 1]
					? ((e = t[t.length - 1]), Array.from(t).slice(0, t.length - 1))
					: Array.from(t)
		return [e, t]
	}
	var L = (function () {
		function p(t) {
			var e,
				n = t.zone || k.defaultZone,
				r =
					t.invalid ||
					(Number.isNaN(t.ts) ? new S("invalid input") : null) ||
					(n.isValid ? null : _n(n)),
				i = ((this.ts = b(t.ts) ? k.now() : t.ts), null),
				o = null
			r ||
				(o =
					t.old && t.old.ts === this.ts && t.old.zone.equals(n)
						? ((i = (e = [t.old.c, t.old.o])[0]), e[1])
						: ((e = n.offset(this.ts)),
						  (i = Hn(this.ts, e)),
						  (i = (r = Number.isNaN(i.year) ? new S("invalid input") : null) ? null : i),
						  r ? null : e)),
				(this._zone = n),
				(this.loc = t.loc || g.create()),
				(this.invalid = r),
				(this.weekData = null),
				(this.c = i),
				(this.o = o),
				(this.isLuxonDateTime = !0)
		}
		;(p.now = function () {
			return new p({})
		}),
			(p.local = function () {
				var t = or(arguments),
					e = t[0],
					t = t[1]
				return rr(
					{
						year: t[0],
						month: t[1],
						day: t[2],
						hour: t[3],
						minute: t[4],
						second: t[5],
						millisecond: t[6],
					},
					e
				)
			}),
			(p.utc = function () {
				var t = or(arguments),
					e = t[0],
					t = t[1],
					n = t[0],
					r = t[1],
					i = t[2],
					o = t[3],
					a = t[4],
					u = t[5],
					t = t[6]
				return (
					(e.zone = d.utcInstance),
					rr({ year: n, month: r, day: i, hour: o, minute: a, second: u, millisecond: t }, e)
				)
			}),
			(p.fromJSDate = function (t, e) {
				void 0 === e && (e = {})
				var n,
					t = "[object Date]" === Object.prototype.toString.call(t) ? t.valueOf() : NaN
				return Number.isNaN(t)
					? p.invalid("invalid input")
					: (n = w(e.zone, k.defaultZone)).isValid
					? new p({ ts: t, zone: n, loc: g.fromObject(e) })
					: p.invalid(_n(n))
			}),
			(p.fromMillis = function (t, e) {
				if ((void 0 === e && (e = {}), y(t)))
					return t < -864e13 || 864e13 < t
						? p.invalid("Timestamp out of range")
						: new p({ ts: t, zone: w(e.zone, k.defaultZone), loc: g.fromObject(e) })
				throw new u(
					"fromMillis requires a numerical input, but received a " + typeof t + " with value " + t
				)
			}),
			(p.fromSeconds = function (t, e) {
				if ((void 0 === e && (e = {}), y(t)))
					return new p({ ts: 1e3 * t, zone: w(e.zone, k.defaultZone), loc: g.fromObject(e) })
				throw new u("fromSeconds requires a numerical input")
			}),
			(p.fromObject = function (t, e) {
				t = t || {}
				var n = w((e = void 0 === e ? {} : e).zone, k.defaultZone)
				if (!n.isValid) return p.invalid(_n(n))
				var r = k.now(),
					i = b(e.specificOffset) ? n.offset(r) : e.specificOffset,
					o = re(t, nr),
					a = !b(o.ordinal),
					u = !b(o.year),
					s = !b(o.month) || !b(o.day),
					u = u || s,
					c = o.weekYear || o.weekNumber,
					e = g.fromObject(e)
				if ((u || a) && c)
					throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
				if (s && a) throw new Y("Can't mix ordinal dates with month/day")
				for (
					var l,
						s = c || (o.weekday && !u),
						f = Hn(r, i),
						d =
							(s
								? ((v = tr), (l = Qn), (f = Zn(f)))
								: a
								? ((v = er), (l = Kn), (f = Ln(f)))
								: ((v = Xn), (l = Bn)),
							!1),
						h = H(v);
					!(m = h()).done;

				) {
					var m = m.value
					b(o[m]) ? (o[m] = (d ? l : f)[m]) : (d = !0)
				}
				var y,
					v,
					c =
						(s
							? ((r = Ht((c = o).weekYear)),
							  (v = T(c.weekNumber, 1, Kt(c.weekYear))),
							  (y = T(c.weekday, 1, 7)),
							  r
									? v
										? !y && Z("weekday", c.weekday)
										: Z("week", c.week)
									: Z("weekYear", c.weekYear))
							: a
							? ((v = Ht((r = o).year)),
							  (y = T(r.ordinal, 1, $t(r.year))),
							  v ? !y && Z("ordinal", r.ordinal) : Z("year", r.year))
							: jn(o)) || An(o)
				return c
					? p.invalid(c)
					: ((r = new p({
							ts: (v = Rn(s ? Fn(o) : a ? zn(o) : o, i, n))[0],
							zone: n,
							o: v[1],
							loc: e,
					  })),
					  o.weekday && u && t.weekday !== r.weekday
							? p.invalid(
									"mismatched weekday",
									"you can't specify both a weekday of " + o.weekday + " and a date of " + r.toISO()
							  )
							: r)
			}),
			(p.fromISO = function (t, e) {
				void 0 === e && (e = {})
				var n = M(t, [Ue, We], [Pe, Je], [He, Ye], [Re, Ge])
				return Jn(n[0], n[1], e, "ISO 8601", t)
			}),
			(p.fromRFC2822 = function (t, e) {
				void 0 === e && (e = {})
				var n = M(
					t
						.replace(/\([^()]*\)|[\n\t]/g, " ")
						.replace(/(\s\s+)/g, " ")
						.trim(),
					[Fe, Le]
				)
				return Jn(n[0], n[1], e, "RFC 2822", t)
			}),
			(p.fromHTTP = function (t, e) {
				void 0 === e && (e = {})
				t = M(t, [ze, qe], [je, qe], [Ae, _e])
				return Jn(t[0], t[1], e, "HTTP", e)
			}),
			(p.fromFormat = function (t, e, n) {
				if ((void 0 === n && (n = {}), b(t) || b(e)))
					throw new u("fromFormat requires an input string and a format")
				var r = n,
					i = r.locale,
					r = r.numberingSystem,
					i = g.fromOpts({
						locale: void 0 === i ? null : i,
						numberingSystem: void 0 === r ? null : r,
						defaultToEN: !0,
					}),
					i = [(r = Mn((r = i), t, e)).result, r.zone, r.specificOffset, r.invalidReason],
					r = i[0],
					o = i[1],
					a = i[2],
					i = i[3]
				return i ? p.invalid(i) : Jn(r, o, n, "format " + e, t, a)
			}),
			(p.fromString = function (t, e, n) {
				return p.fromFormat(t, e, (n = void 0 === n ? {} : n))
			}),
			(p.fromSQL = function (t, e) {
				void 0 === e && (e = {})
				var n = M(t, [Be, We], [Qe, Ke])
				return Jn(n[0], n[1], e, "SQL", t)
			}),
			(p.invalid = function (t, e) {
				if ((void 0 === e && (e = null), !t))
					throw new u("need to specify a reason the DateTime is invalid")
				t = t instanceof S ? t : new S(t, e)
				if (k.throwOnInvalid) throw new R(t)
				return new p({ invalid: t })
			}),
			(p.isDateTime = function (t) {
				return (t && t.isLuxonDateTime) || !1
			}),
			(p.parseFormatForOpts = function (t, e) {
				t = Dn(t, g.fromObject((e = void 0 === e ? {} : e)))
				return t
					? t
							.map(function (t) {
								return t ? t.val : null
							})
							.join("")
					: null
			}),
			(p.expandFormat = function (t, e) {
				return (
					void 0 === e && (e = {}),
					Nn(O.parseFormat(t), g.fromObject(e))
						.map(function (t) {
							return t.val
						})
						.join("")
				)
			})
		var t = p.prototype
		return (
			(t.get = function (t) {
				return this[t]
			}),
			(t.getPossibleOffsets = function () {
				var t, e, n, r
				return this.isValid &&
					!this.isOffsetFixed &&
					((t = Qt(this.c)),
					(n = this.zone.offset(t - 864e5)),
					(r = this.zone.offset(t + 864e5)),
					(n = this.zone.offset(t - 6e4 * n)) !== (r = this.zone.offset(t - 6e4 * r))) &&
					((e = t - 6e4 * r), (n = Hn((t = t - 6e4 * n), n)), (r = Hn(e, r)), n.hour === r.hour) &&
					n.minute === r.minute &&
					n.second === r.second &&
					n.millisecond === r.millisecond
					? [F(this, { ts: t }), F(this, { ts: e })]
					: [this]
			}),
			(t.resolvedLocaleOptions = function (t) {
				t = O.create(this.loc.clone((t = void 0 === t ? {} : t)), t).resolvedOptions(this)
				return { locale: t.locale, numberingSystem: t.numberingSystem, outputCalendar: t.calendar }
			}),
			(t.toUTC = function (t, e) {
				return void 0 === e && (e = {}), this.setZone(d.instance((t = void 0 === t ? 0 : t)), e)
			}),
			(t.toLocal = function () {
				return this.setZone(k.defaultZone)
			}),
			(t.setZone = function (t, e) {
				var n,
					e = void 0 === e ? {} : e,
					r = e.keepLocalTime,
					r = void 0 !== r && r,
					e = e.keepCalendarTime,
					e = void 0 !== e && e
				return (t = w(t, k.defaultZone)).equals(this.zone)
					? this
					: t.isValid
					? ((n = this.ts),
					  (r || e) && ((r = t.offset(this.ts)), (n = Rn(this.toObject(), r, t)[0])),
					  F(this, { ts: n, zone: t }))
					: p.invalid(_n(t))
			}),
			(t.reconfigure = function (t) {
				var t = void 0 === t ? {} : t,
					e = t.locale,
					n = t.numberingSystem,
					t = t.outputCalendar,
					e = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: t })
				return F(this, { loc: e })
			}),
			(t.setLocale = function (t) {
				return this.reconfigure({ locale: t })
			}),
			(t.set = function (t) {
				if (!this.isValid) return this
				var e,
					t = re(t, nr),
					n = !b(t.weekYear) || !b(t.weekNumber) || !b(t.weekday),
					r = !b(t.ordinal),
					i = !b(t.year),
					o = !b(t.month) || !b(t.day),
					a = t.weekYear || t.weekNumber
				if ((i || o || r) && a)
					throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
				if (o && r) throw new Y("Can't mix ordinal dates with month/day")
				n
					? (e = Fn(s({}, Zn(this.c), t)))
					: b(t.ordinal)
					? ((e = s({}, this.toObject(), t)),
					  b(t.day) && (e.day = Math.min(Bt(e.year, e.month), e.day)))
					: (e = zn(s({}, Ln(this.c), t)))
				i = Rn(e, this.o, this.zone)
				return F(this, { ts: i[0], o: i[1] })
			}),
			(t.plus = function (t) {
				return this.isValid ? F(this, Wn(this, V.fromDurationLike(t))) : this
			}),
			(t.minus = function (t) {
				return this.isValid ? F(this, Wn(this, V.fromDurationLike(t).negate())) : this
			}),
			(t.startOf = function (t) {
				if (!this.isValid) return this
				var e = {},
					t = V.normalizeUnit(t)
				switch (t) {
					case "years":
						e.month = 1
					case "quarters":
					case "months":
						e.day = 1
					case "weeks":
					case "days":
						e.hour = 0
					case "hours":
						e.minute = 0
					case "minutes":
						e.second = 0
					case "seconds":
						e.millisecond = 0
				}
				return (
					"weeks" === t && (e.weekday = 1),
					"quarters" === t && ((t = Math.ceil(this.month / 3)), (e.month = 3 * (t - 1) + 1)),
					this.set(e)
				)
			}),
			(t.endOf = function (t) {
				var e
				return this.isValid
					? this.plus((((e = {})[t] = 1), e))
							.startOf(t)
							.minus(1)
					: this
			}),
			(t.toFormat = function (t, e) {
				return (
					void 0 === e && (e = {}),
					this.isValid ? O.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t) : qn
				)
			}),
			(t.toLocaleString = function (t, e) {
				return (
					void 0 === t && (t = $),
					void 0 === e && (e = {}),
					this.isValid ? O.create(this.loc.clone(e), t).formatDateTime(this) : qn
				)
			}),
			(t.toLocaleParts = function (t) {
				return (
					void 0 === t && (t = {}),
					this.isValid ? O.create(this.loc.clone(t), t).formatDateTimeParts(this) : []
				)
			}),
			(t.toISO = function (t) {
				var e,
					t = void 0 === t ? {} : t,
					n = t.format,
					r = t.suppressSeconds,
					r = void 0 !== r && r,
					i = t.suppressMilliseconds,
					i = void 0 !== i && i,
					o = t.includeOffset,
					o = void 0 === o || o,
					t = t.extendedZone,
					t = void 0 !== t && t
				return this.isValid
					? ((e = Gn(this, (n = "extended" === (void 0 === n ? "extended" : n)))),
					  (e += "T") + $n(this, n, r, i, o, t))
					: null
			}),
			(t.toISODate = function (t) {
				t = (void 0 === t ? {} : t).format
				return this.isValid ? Gn(this, "extended" === (void 0 === t ? "extended" : t)) : null
			}),
			(t.toISOWeekDate = function () {
				return Yn(this, "kkkk-'W'WW-c")
			}),
			(t.toISOTime = function (t) {
				var t = void 0 === t ? {} : t,
					e = t.suppressMilliseconds,
					n = t.suppressSeconds,
					r = t.includeOffset,
					i = t.includePrefix,
					o = t.extendedZone,
					t = t.format
				return this.isValid
					? (void 0 !== i && i ? "T" : "") +
							$n(
								this,
								"extended" === (void 0 === t ? "extended" : t),
								void 0 !== n && n,
								void 0 !== e && e,
								void 0 === r || r,
								void 0 !== o && o
							)
					: null
			}),
			(t.toRFC2822 = function () {
				return Yn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
			}),
			(t.toHTTP = function () {
				return Yn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
			}),
			(t.toSQLDate = function () {
				return this.isValid ? Gn(this, !0) : null
			}),
			(t.toSQLTime = function (t) {
				var t = void 0 === t ? {} : t,
					e = t.includeOffset,
					e = void 0 === e || e,
					n = t.includeZone,
					n = void 0 !== n && n,
					t = t.includeOffsetSpace,
					r = "HH:mm:ss.SSS"
				return (
					(n || e) && ((void 0 === t || t) && (r += " "), n ? (r += "z") : e && (r += "ZZ")),
					Yn(this, r, !0)
				)
			}),
			(t.toSQL = function (t) {
				return (
					void 0 === t && (t = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null
				)
			}),
			(t.toString = function () {
				return this.isValid ? this.toISO() : qn
			}),
			(t.valueOf = function () {
				return this.toMillis()
			}),
			(t.toMillis = function () {
				return this.isValid ? this.ts : NaN
			}),
			(t.toSeconds = function () {
				return this.isValid ? this.ts / 1e3 : NaN
			}),
			(t.toUnixInteger = function () {
				return this.isValid ? Math.floor(this.ts / 1e3) : NaN
			}),
			(t.toJSON = function () {
				return this.toISO()
			}),
			(t.toBSON = function () {
				return this.toJSDate()
			}),
			(t.toObject = function (t) {
				var e
				return (
					void 0 === t && (t = {}),
					this.isValid
						? ((e = s({}, this.c)),
						  t.includeConfig &&
								((e.outputCalendar = this.outputCalendar),
								(e.numberingSystem = this.loc.numberingSystem),
								(e.locale = this.loc.locale)),
						  e)
						: {}
				)
			}),
			(t.toJSDate = function () {
				return new Date(this.isValid ? this.ts : NaN)
			}),
			(t.diff = function (t, e, n) {
				var r
				return (
					void 0 === e && (e = "milliseconds"),
					void 0 === n && (n = {}),
					this.isValid && t.isValid
						? ((n = s({ locale: this.locale, numberingSystem: this.numberingSystem }, n)),
						  (e = e),
						  (e = (Array.isArray(e) ? e : [e]).map(V.normalizeUnit)),
						  (t = fn((r = t.valueOf() > this.valueOf()) ? this : t, r ? t : this, e, n)),
						  r ? t.negate() : t)
						: V.invalid("created by diffing an invalid DateTime")
				)
			}),
			(t.diffNow = function (t, e) {
				return (
					void 0 === t && (t = "milliseconds"), void 0 === e && (e = {}), this.diff(p.now(), t, e)
				)
			}),
			(t.until = function (t) {
				return this.isValid ? sn.fromDateTimes(this, t) : this
			}),
			(t.hasSame = function (t, e) {
				var n
				return (
					!!this.isValid &&
					((n = t.valueOf()), (t = this.setZone(t.zone, { keepLocalTime: !0 })).startOf(e) <= n) &&
					n <= t.endOf(e)
				)
			}),
			(t.equals = function (t) {
				return (
					this.isValid &&
					t.isValid &&
					this.valueOf() === t.valueOf() &&
					this.zone.equals(t.zone) &&
					this.loc.equals(t.loc)
				)
			}),
			(t.toRelative = function (t) {
				var e, n, r, i
				return this.isValid
					? ((e = (t = void 0 === t ? {} : t).base || p.fromObject({}, { zone: this.zone })),
					  (n = t.padding ? (this < e ? -t.padding : t.padding) : 0),
					  (r = ["years", "months", "days", "hours", "minutes", "seconds"]),
					  (i = t.unit),
					  Array.isArray(t.unit) && ((r = t.unit), (i = void 0)),
					  ir(e, this.plus(n), s({}, t, { numeric: "always", units: r, unit: i })))
					: null
			}),
			(t.toRelativeCalendar = function (t) {
				return (
					void 0 === t && (t = {}),
					this.isValid
						? ir(
								t.base || p.fromObject({}, { zone: this.zone }),
								this,
								s({}, t, { numeric: "auto", units: ["years", "months", "days"], calendary: !0 })
						  )
						: null
				)
			}),
			(p.min = function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
				if (e.every(p.isDateTime))
					return Wt(
						e,
						function (t) {
							return t.valueOf()
						},
						Math.min
					)
				throw new u("min requires all arguments be DateTimes")
			}),
			(p.max = function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
				if (e.every(p.isDateTime))
					return Wt(
						e,
						function (t) {
							return t.valueOf()
						},
						Math.max
					)
				throw new u("max requires all arguments be DateTimes")
			}),
			(p.fromFormatExplain = function (t, e, n) {
				var n = (n = void 0 === n ? {} : n),
					r = n.locale,
					n = n.numberingSystem
				return Mn(
					g.fromOpts({
						locale: void 0 === r ? null : r,
						numberingSystem: void 0 === n ? null : n,
						defaultToEN: !0,
					}),
					t,
					e
				)
			}),
			(p.fromStringExplain = function (t, e, n) {
				return p.fromFormatExplain(t, e, (n = void 0 === n ? {} : n))
			}),
			o(
				p,
				[
					{
						key: "isValid",
						get: function () {
							return null === this.invalid
						},
					},
					{
						key: "invalidReason",
						get: function () {
							return this.invalid ? this.invalid.reason : null
						},
					},
					{
						key: "invalidExplanation",
						get: function () {
							return this.invalid ? this.invalid.explanation : null
						},
					},
					{
						key: "locale",
						get: function () {
							return this.isValid ? this.loc.locale : null
						},
					},
					{
						key: "numberingSystem",
						get: function () {
							return this.isValid ? this.loc.numberingSystem : null
						},
					},
					{
						key: "outputCalendar",
						get: function () {
							return this.isValid ? this.loc.outputCalendar : null
						},
					},
					{
						key: "zone",
						get: function () {
							return this._zone
						},
					},
					{
						key: "zoneName",
						get: function () {
							return this.isValid ? this.zone.name : null
						},
					},
					{
						key: "year",
						get: function () {
							return this.isValid ? this.c.year : NaN
						},
					},
					{
						key: "quarter",
						get: function () {
							return this.isValid ? Math.ceil(this.c.month / 3) : NaN
						},
					},
					{
						key: "month",
						get: function () {
							return this.isValid ? this.c.month : NaN
						},
					},
					{
						key: "day",
						get: function () {
							return this.isValid ? this.c.day : NaN
						},
					},
					{
						key: "hour",
						get: function () {
							return this.isValid ? this.c.hour : NaN
						},
					},
					{
						key: "minute",
						get: function () {
							return this.isValid ? this.c.minute : NaN
						},
					},
					{
						key: "second",
						get: function () {
							return this.isValid ? this.c.second : NaN
						},
					},
					{
						key: "millisecond",
						get: function () {
							return this.isValid ? this.c.millisecond : NaN
						},
					},
					{
						key: "weekYear",
						get: function () {
							return this.isValid ? Un(this).weekYear : NaN
						},
					},
					{
						key: "weekNumber",
						get: function () {
							return this.isValid ? Un(this).weekNumber : NaN
						},
					},
					{
						key: "weekday",
						get: function () {
							return this.isValid ? Un(this).weekday : NaN
						},
					},
					{
						key: "ordinal",
						get: function () {
							return this.isValid ? Ln(this.c).ordinal : NaN
						},
					},
					{
						key: "monthShort",
						get: function () {
							return this.isValid ? cn.months("short", { locObj: this.loc })[this.month - 1] : null
						},
					},
					{
						key: "monthLong",
						get: function () {
							return this.isValid ? cn.months("long", { locObj: this.loc })[this.month - 1] : null
						},
					},
					{
						key: "weekdayShort",
						get: function () {
							return this.isValid
								? cn.weekdays("short", { locObj: this.loc })[this.weekday - 1]
								: null
						},
					},
					{
						key: "weekdayLong",
						get: function () {
							return this.isValid
								? cn.weekdays("long", { locObj: this.loc })[this.weekday - 1]
								: null
						},
					},
					{
						key: "offset",
						get: function () {
							return this.isValid ? +this.o : NaN
						},
					},
					{
						key: "offsetNameShort",
						get: function () {
							return this.isValid
								? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
								: null
						},
					},
					{
						key: "offsetNameLong",
						get: function () {
							return this.isValid
								? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
								: null
						},
					},
					{
						key: "isOffsetFixed",
						get: function () {
							return this.isValid ? this.zone.isUniversal : null
						},
					},
					{
						key: "isInDST",
						get: function () {
							return (
								!this.isOffsetFixed &&
								(this.offset > this.set({ month: 1, day: 1 }).offset ||
									this.offset > this.set({ month: 5 }).offset)
							)
						},
					},
					{
						key: "isInLeapYear",
						get: function () {
							return Gt(this.year)
						},
					},
					{
						key: "daysInMonth",
						get: function () {
							return Bt(this.year, this.month)
						},
					},
					{
						key: "daysInYear",
						get: function () {
							return this.isValid ? $t(this.year) : NaN
						},
					},
					{
						key: "weeksInWeekYear",
						get: function () {
							return this.isValid ? Kt(this.weekYear) : NaN
						},
					},
				],
				[
					{
						key: "DATE_SHORT",
						get: function () {
							return $
						},
					},
					{
						key: "DATE_MED",
						get: function () {
							return B
						},
					},
					{
						key: "DATE_MED_WITH_WEEKDAY",
						get: function () {
							return Q
						},
					},
					{
						key: "DATE_FULL",
						get: function () {
							return K
						},
					},
					{
						key: "DATE_HUGE",
						get: function () {
							return X
						},
					},
					{
						key: "TIME_SIMPLE",
						get: function () {
							return tt
						},
					},
					{
						key: "TIME_WITH_SECONDS",
						get: function () {
							return et
						},
					},
					{
						key: "TIME_WITH_SHORT_OFFSET",
						get: function () {
							return nt
						},
					},
					{
						key: "TIME_WITH_LONG_OFFSET",
						get: function () {
							return rt
						},
					},
					{
						key: "TIME_24_SIMPLE",
						get: function () {
							return it
						},
					},
					{
						key: "TIME_24_WITH_SECONDS",
						get: function () {
							return ot
						},
					},
					{
						key: "TIME_24_WITH_SHORT_OFFSET",
						get: function () {
							return at
						},
					},
					{
						key: "TIME_24_WITH_LONG_OFFSET",
						get: function () {
							return ut
						},
					},
					{
						key: "DATETIME_SHORT",
						get: function () {
							return st
						},
					},
					{
						key: "DATETIME_SHORT_WITH_SECONDS",
						get: function () {
							return ct
						},
					},
					{
						key: "DATETIME_MED",
						get: function () {
							return lt
						},
					},
					{
						key: "DATETIME_MED_WITH_SECONDS",
						get: function () {
							return ft
						},
					},
					{
						key: "DATETIME_MED_WITH_WEEKDAY",
						get: function () {
							return dt
						},
					},
					{
						key: "DATETIME_FULL",
						get: function () {
							return ht
						},
					},
					{
						key: "DATETIME_FULL_WITH_SECONDS",
						get: function () {
							return mt
						},
					},
					{
						key: "DATETIME_HUGE",
						get: function () {
							return yt
						},
					},
					{
						key: "DATETIME_HUGE_WITH_SECONDS",
						get: function () {
							return vt
						},
					},
				]
			),
			p
		)
	})()
	function ar(t) {
		if (L.isDateTime(t)) return t
		if (t && t.valueOf && y(t.valueOf())) return L.fromJSDate(t)
		if (t && "object" == typeof t) return L.fromObject(t)
		throw new u("Unknown datetime argument: " + t + ", of type " + typeof t)
	}
	return (
		(t.DateTime = L),
		(t.Duration = V),
		(t.FixedOffsetZone = d),
		(t.IANAZone = f),
		(t.Info = cn),
		(t.Interval = sn),
		(t.InvalidZone = Lt),
		(t.Settings = k),
		(t.SystemZone = gt),
		(t.VERSION = "3.4.2"),
		(t.Zone = c),
		Object.defineProperty(t, "__esModule", { value: !0 }),
		t
	)
})({})


function getMoonPhaseEmoji() {
	const m = luxon.DateTime.now().setZone("America/New_York").startOf("day").toJSDate()
	const h = luxon.DateTime.now().setZone("America/New_York").startOf("day").plus({ days: 1 }).toJSDate()

	var t = SunCalc.getMoonIllumination(m).phase
	var r = SunCalc.getMoonIllumination(h).phase
	if (t <= 0.25 && r >= 0.25) {
		return ["🌓", "🌗", "🌛", "🌜"]
	} else if (t <= 0.5 && r >= 0.5) {
		return ["🌕", "🌝"]
	} else if (t <= 0.75 && r >= 0.75) {
		return ["🌓", "🌗", "🌛", "🌜"]
	} else if (t >= r) {
		return ["🌑", "🌚"]
	} else if (t <= 0.25) {
		return ["🌒", "🌘"]
	} else if (t <= 0.5 || t <= 0.75) {
		return ["🌔", "🌖"]
	} else {
		return ["🌒", "🌘"]
	}
}

