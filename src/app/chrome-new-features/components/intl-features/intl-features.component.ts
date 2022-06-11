import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'intl-features',
	templateUrl: 'intl-features.component.html',
  styles:[`
    mat-radio-group {
      gap: 1.3em;
      display: flex;
      justify-content: center;
    }
  `]
})
export class IntlFeaturesComponent implements OnInit {
	lang = 'fr';
	daysAndWeek = '';
  listFormat = '';


  ngOnInit() {
    this.showMessage(this.lang);
  }
  

	showMessage(lang: string) {
		const relatiTimeFormat = new Intl['RelativeTimeFormat'](lang, { numeric: 'auto' });
		let msg = {
			yesterday: relatiTimeFormat.format(-1, 'day'),
			today: relatiTimeFormat.format(0, 'day'),
			tomorrow: relatiTimeFormat.format(1, 'day'),
			'last week': relatiTimeFormat.format(-1, 'week'),
			'this week': relatiTimeFormat.format(0, 'week'),
			'next week': relatiTimeFormat.format(1, 'week'),
		};

		this.daysAndWeek = this.prettify(msg);


    const listFormatAnd = new Intl['ListFormat'](lang);
    const listFormatOr = new Intl['ListFormat'](lang, {type: 'disjunction'});

    const ltFormatObj = {
      junction: listFormatAnd.format(['John', 'Ada', 'Michael']),
      disjunction: listFormatOr.format(['John', 'Ada', 'Michael'])
    }

    this.listFormat = this.prettify(ltFormatObj);
	}

  private prettify(data: any) {
    return JSON.stringify(data, undefined, 3)
			.replace(/ /g, '&nbsp;')
			.replace(/\n/g, '<br/>');

  }
}
